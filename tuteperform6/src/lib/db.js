const {usernamee,password} = process.env;

export const conectionStr="mongodb+srv://"+usernamee+":"+password+"@cluster0.snmeblz.mongodb.net/productDB?retryWrites=true&w=majority";
