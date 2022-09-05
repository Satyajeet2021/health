import React, {useEffect,useState} from 'react'
import {Link} from "react-router-dom";
import Header from '../../header/Header';
import Sidebarr from '../../sidebar/Sidebar';
import Tool from '../../sidebar/Tool';
import Footer from '../../footer/Footer';
import {AddCouponAction} from "../../action";
import {useDispatch,useSelector} from "react-redux";
import { useForm } from "react-hook-form";
import { MultiSelect } from "react-multi-select-component";

import Editor from "./Editor";

  
export default function AddVendor() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [selected, setSelected] = useState([]);
  const [fixedProductDiscount,setFixedProductDiscount] = useState(false);
  const dispatch =  useDispatch()
  const vendor = useSelector(state=>state?.vendor);
  const auth = useSelector(state=>state); 
  const obj = {}
  const [inputField , setInputField] = useState(obj)
  const options = [
  { label: "Items A", value: "Items A" },
  { label: "Items B", value: "Items B" },
  { label: "Items C", value: "Items C" },
];

const inputsHandler = (e) =>{
    let name = e.target.name; 
    let value = e.target.value;
    inputField[name] = value;
    setInputField(inputField);
    //setInputField( {[e.target.name]: e.target.value} )
}

 
 const [editorLoaded, setEditorLoaded] = useState(false); 
  const [username,setusername] = useState("");
  const [password,setpassword] = useState("");
  const [address,setaddress] = useState("");
  const [phone,setphone] = useState("");
  const [email,setemail] = useState("");
  const [age,setage] = useState("");
  const [sex,setsex] = useState("");
  const [height,setheight] = useState("");
  const [weight,setweight] = useState("");
  const [chronic,setchronic] = useState(""); 
  const [drug,setdrug] = useState("");
  const [bp,setbp] = useState(""); 
  const [sideEffect,setsideEffect] = useState("");
  const [remindBPTextMsg,setremindBPTextMsg] = useState("");



const onSubmit = () => { 
   const data={
    // couponCode,
    // couponDescription,
    // couponType,
    // couponUsage,
    // couponExpire,
    // indivisualUse,
    // excludeUse,
    // productList:selected,
    // couponPrice
    username,
    password,
    address,
    phone,
    email,
    chronic,
    age,
    sex,
    height,
    weight,
    drug,
    bp,
    sideEffect,
    remindBPTextMsg
  } 
   dispatch(AddCouponAction(data)); 
}


  useEffect(() => {
    setEditorLoaded(true);
  }, []);

//  const randomCoupon=()=>{
//     var result           = '';
//     var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//     var charactersLength = characters.length;
//     for ( var i = 0; i < 6; i++ ) {
//       result += characters.charAt(Math.floor(Math.random() *charactersLength));
//    }
//     setCouponCode(result);
// }

// const optionOnChange=(value)=>{
// setCouponType(value)
// if(value==="Fixed Product Discount"){
//   setFixedProductDiscount(true)
// }else{
//   setFixedProductDiscount(false)
// }

// }
 

  

	return (
		<div className="sidebar-mini skin-green-light">
		<div className="wrapper"> 
  		  <Header/> 
  		  <Sidebarr/> 
  <div className="content-wrapper"> 
    <section className="content-header">
      <h1>
       Add New Patent
      </h1>
      <ol className="breadcrumb">
        <li>
          <a href="#">
            <i className="fa fa-dashboard" /> Home
          </a>
        </li>
        <li>
          <a href="#">Manage Patent</a>
        </li>
        <li className="active">All Patent</li>
      </ol>
    </section> 
    <section className="content"> 
      <div className="box">
      <div className="box-header with-border"> 
          <div className="box-tools pull-right">
            {/* <Link
              to="/patentlist"
              type="button"
              className="btn btn-success" 
              data-toggle="tooltip"
              title="Add"
            > */}
            <Link
              to="/managepatent"
              type="button"
              className="btn btn-success" 
              data-toggle="tooltip"
              title="Add"
            >
              <i className="fa fa-eye" />
              {" View Patents"}
            </Link> 
          </div>
        </div>

        <div className="box-body">
        <section className="content">
          <div className="row">  
            <div className="col-md-12">
              <div className="nav-tabs-custom">
                {/* <ul className="nav nav-tabs"> 
                  <li className="active"><a href="#settings" data-toggle="tab">Update Profile</a></li>
                </ul> */}
                <div className="tab-content">
                  <div className="active tab-pane" id="settings">
                    <form className="form-horizontal">
                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">User Name</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="inputName" placeholder="" name="fname" value={username} onChange={(e)=>setusername(e.target.value)}/>
                          {errors.fname && <span className='validationError'>Required</span>}
                        </div> 
                      </div>

                       <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Password</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="inputName" placeholder="" name="fname" onChange={(e)=>setpassword(e.target.value)}/>
                          {errors.fname && <span className='validationError'>Required</span>}
                        </div> 
                      </div>
  
                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Address</label>
                        <div className="col-sm-10">
                        {/* <Editor
                          name="description"
                          onChange={(data) => {
                            setaddress(data);
                          }}
                          editorLoaded={editorLoaded}
                        /> */}
                        <input type="text"  className="form-control" id="inputName" placeholder="" name="fname" onChange={(e)=>setaddress(e.target.value)}/>

                          {errors.lname && <span className='validationError'>Required</span>}
                        </div>
                      </div> 


                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Phone Number</label>
                        <div className="col-sm-10"> 
                        <input type="text"  className="form-control" id="inputName" placeholder="" name="fname" onChange={(e)=>setphone(e.target.value)}/>
                        </div> 
                      </div> 
                      
                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Email</label>
                        <div className="col-sm-10"> 
                        <input type="text"  className="form-control" id="inputName" placeholder="" name="fname" onChange={(e)=>setemail(e.target.value)}/>
                        </div> 
                      </div>
                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Age</label>
                        <div className="col-sm-10"> 
                        <input type="text"  className="form-control" id="inputName" placeholder="" name="fname" onChange={(e)=>setage(e.target.value)}/>
                        </div> 
                      </div>
                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Sex</label>
                        <div className="col-sm-10"> 
                        <input type="text"  className="form-control" id="inputName" placeholder="" name="fname" onChange={(e)=>setsex(e.target.value)}/>
                        </div> 
                      </div>
                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Height</label>
                        <div className="col-sm-10"> 
                        <input type="text"  className="form-control" id="inputName" placeholder="" name="fname" onChange={(e)=>setheight(e.target.value)}/>
                        </div> 
                      </div>
                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Weight</label>
                        <div className="col-sm-10"> 
                        <input type="text"  className="form-control" id="inputName" placeholder="" name="fname" onChange={(e)=>setweight(e.target.value)}/>
                        </div> 
                      </div>
                       <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Record chronic disease</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="inputName" placeholder="" name="fname" onChange={(e)=>setchronic(e.target.value)}/>
                          {errors.fname && <span className='validationError'>Required</span>}
                        </div> 
                      </div>
                       <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Record drug allergies</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="inputName" placeholder="" name="fname" onChange={(e)=>setdrug(e.target.value)}/>
                          {errors.fname && <span className='validationError'>Required</span>}
                        </div> 
                      </div>

                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Record bp</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="inputName" placeholder="" name="fname" onChange={(e)=>setbp(e.target.value)}/>
                          {errors.fname && <span className='validationError'>Required</span>}
                        </div> 
                      </div>

                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Way to communicate side effects</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="inputName" placeholder="" name="fname" onChange={(e)=>setsideEffect(e.target.value)}/>
                          {errors.fname && <span className='validationError'>Required</span>}
                        </div> 
                      </div>

                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Reminder to take bp by text message</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="inputName" placeholder="" name="fname" onChange={(e)=>setremindBPTextMsg(e.target.value)}/>
                          {errors.fname && <span className='validationError'>Required</span>}
                        </div> 
                      </div>

                      
                      <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                          <button type="button" className="btn btn-danger" onClick={(e)=>onSubmit()}>Submit</button>
                        </div>
                      </div>
                    </form>
                  </div> 
                </div> 
              </div> 
            </div> 
          </div> 
        </section> 
        </div>
       </div> 
    </section> 
  </div> 
  <Footer/>
       <Tool/> 
   
  <div className="control-sidebar-bg" />
</div>

			
		</div>
	)
}