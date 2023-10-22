const { createSlice , nanoid, current, createAsyncThunk} = require("@reduxjs/toolkit")

const initialState = {
    usersAPIData:[],
    users:JSON.parse(localStorage.getItem("users")) || [],
}

export const fetchApiUsers = createAsyncThunk("fetchApiUsers" , async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    return result.json();
})

const Slice = createSlice({
    name:"addUserSlice",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            console.log(action);
            const data = {
                id:nanoid(),
                name:action.payload
            }
            state.users.push(data)
            let userData = JSON.stringify(current(state.users))
            localStorage.setItem("users",userData)
        },
        removeUser:(state,action)=>{
            console.log(action);

            const data = state.users.filter(item=> item.id !== action.payload);
            state.users = data
            localStorage.setItem("users",JSON.stringify(data))
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(fetchApiUsers.fulfilled , (state,action)=>{
            state.isloading=false,
            state.usersAPIData = action.payload
        })
    } 
})

export const {addUser , removeUser} = Slice.actions;

export default Slice.reducer;