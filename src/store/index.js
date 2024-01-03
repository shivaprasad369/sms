import {configureStore, createSlice} from '@reduxjs/toolkit'
let initialState={
    studentsData:[],
    teachersData:[],
    detail:[],
};
const smsSlice=createSlice({
    name:'sms',
    initialState,
    reducers:{
        addStudent(state,action){
            const newOne=action.payload;
            // state.studentsData=action.payload;
            console.log(state.studentsData);
            newOne.forEach(element => {
                const exist=state.studentsData.find(({regno})=>regno===element.regno);
                if(!exist){
                    state.studentsData.push({
                        name:element.name,
                        email:element.email,
                        phone:element.phone,
                        regno:element.regno,
                        course:element.course              
                    });
                }else{
                    alert("Please enter unique Regno")
                };
                
            });
        },
        addTeacher(state,action){
            const newOne=action.payload;
          //  console.log(state.studentsData);
          newOne.forEach(element => {
            const exist=state.teachersData.find(({id})=>id===element.id);
            if(!exist){

                state.teachersData.push({
                    name:element.name,
                    email:element.email,
                    phone:element.phone,
                    id:element.id,
                    qualification:element.qualification              
                });
            }
        })
        },
        details(state,action){
            if(action.payload.type==='student'){
                const index= state.studentsData.findIndex(({regno})=>regno===action.payload.id);
                const data=state.studentsData[index];
                state.detail=data;
                console.log(data)
            }
            if(action.payload.type==='teacher'){
                const index= state.teachersData.findIndex(({id})=>id===action.payload.id);
                const data=state.teachersData[index];
                const arrenge={
                    name:data.name,
                    email:data.email,
                    phone:data.phone,
                    regno:data.id,
                    course:data.qualification
                }
                state.detail=arrenge;
                console.log(arrenge)
            }
          
        }

    }
   
})



const store=configureStore({
    reducer:{sms:smsSlice.reducer}
})
export const {addStudent,addTeacher,details} = smsSlice.actions
export default store;