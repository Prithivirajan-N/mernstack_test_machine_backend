const {WebUser}= require('../module/authModule');
const bcrypt = require('bcrypt');
const {createToken}=require('../token/jwt')
exports.signup= async (req,res)=>{
    const{userName,email,password,confirmPassword}=req.body;
    const trimmedUser = userName? userName.trim() : ' ';
    if(!trimmedUser){
        res.status(400).send('username is required');
    };
    if(password !== confirmPassword)
    {
        res.status(400).send('password does not match');
    };
    try{
        const existingUser = await WebUser.findOne({email});
        if(existingUser){
            res.status(400).send(' Email already exist');
        }
        const hashPassword =  await bcrypt.hash(password, 10);
        const user = new WebUser({userName:trimmedUser,email,password:hashPassword});
        await user.save();
        res.status(201).send('user signup successfully');
    }
    catch(err){
        console.log(err);
        res.status(500).send('error saving user');
    };
};

//login user

exports.login = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    try {
        // Check if the user exists in the database
        const user = await WebUser.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        // Compare the provided password with the hashed password in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        // Generate token (ensure that createToken is defined and works correctly)
        const token = await createToken({ id: user._id, email: user.email });

        // Send success response
        return res.status(200).json({
            message: "User logged in successfully",
            token,
            user: user.userName,
        });
    } catch (err) {
        console.log('Error during login:', err);
        return res.status(500).json({ message: 'Server error' });
    }
};


