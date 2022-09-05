import React, {useEffect,useState} from 'react'
import {Link,useParams} from "react-router-dom";
import Header from '../../header/Header';
import Sidebarr from '../../sidebar/Sidebar';
import Tool from '../../sidebar/Tool';
import Footer from '../../footer/Footer';
import {EditCouponAction} from "../../action";
import {useDispatch,useSelector} from "react-redux";
import { useForm } from "react-hook-form";

import Editor from "./Editor";

  
export default function AddVendor() {
  const { couponId } = useParams();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch =  useDispatch()
  const vendor = useSelector(state=>state?.vendor);
  const auth = useSelector(state=>state); 
  const obj = {}
  const [inputField , setInputField] = useState(obj)

const inputsHandler = (e) =>{
    let name = e.target.name; 
    let value = e.target.value;
    inputField[name] = value;
    setInputField(inputField);
    //setInputField( {[e.target.name]: e.target.value} )
}

 const couponData = useSelector(state=>state?.category?.coupon)
  // const [editorLoaded, setEditorLoaded] = useState(false); 
  // const [couponCode,setCouponCode] = useState("");
  // const [couponDescription,setCouponDescription] = useState("");
  // const [couponType,setCouponType] = useState("");
  // const [couponUsage,setCouponUsage] = useState("");
  // const [couponExpire,setCouponExpire] = useState("");

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
  const [drug,setdrug] = useState(false);
  const [bp,setbp] = useState(false); 
  const [sideEffect,setsideEffect] = useState([]);
  const [remindBPTextMsg,setremindBPTextMsg] = useState([]);


const onSubmit = () => { 
   const data={
    // couponId,
    // couponCode,
    // couponDescription,
    // couponType,
    // couponUsage,
    // couponExpire

    couponId,
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
   dispatch(EditCouponAction(data));
   alert("Patent Update Successfully...")
}


  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  useEffect(() => {
    setEditorLoaded(true);
    const data = couponData.find(obj=>{return obj._id===couponId})
    console.log(data)
    // setCouponCode(data?.couponCode) 
    // setCouponDescription(data?.couponDescription) 
    // setCouponType(data?.couponType)
    // setCouponUsage(data?.couponUsage)
    // setCouponExpire(data?.couponExpire)

    setusername(data?.username) 
    setpassword(data?.password) 
    setaddress(data?.address)
    setphone(data?.phone)
    setemail(data?.email)
    setage(data?.age) 
    setsex(data?.sex) 
    setheight(data?.height)
    setweight(data?.weight)
    setchronic(data?.chronic)
    setdrug(data?.drug) 
    setbp(data?.bp) 
    setsideEffect(data?.sideEffect)
    setremindBPTextMsg(data?.remindBPTextMsg)
    
  }, []); 

  

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
          <a href="/home">
            <i className="fa fa-dashboard" /> Home
          </a>
        </li>
        <li>
          <a href="/managepatent">Manage Patent</a>
        </li>
        <li className="active">All Patent</li>
      </ol>
    </section> 
    <section className="content"> 
      <div className="box">
      <div className="box-header with-border"> 
          <div className="box-tools pull-right">
            {/* <Link
              to="/couponlist"
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
              {" View Patent"}
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
                          <input type="text"  className="form-control" id="inputName" placeholder="" name="fname" value={password} onChange={(e)=>setpassword(e.target.value)}/>
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
                        <input type="text"  className="form-control" id="inputName" placeholder="" value={address} name="fname" onChange={(e)=>setaddress(e.target.value)}/>

                          {errors.lname && <span className='validationError'>Required</span>}
                        </div>
                      </div> 


                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Phone Number</label>
                        <div className="col-sm-10"> 
                        <input type="text"  className="form-control" id="inputName" placeholder="" value={phone} name="fname" onChange={(e)=>setphone(e.target.value)}/>
                        </div> 
                      </div> 
                      
                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Email</label>
                        <div className="col-sm-10"> 
                        <input type="text"  className="form-control" id="inputName" placeholder="" value={email} name="fname" onChange={(e)=>setemail(e.target.value)}/>
                        </div> 
                      </div>
                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Age</label>
                        <div className="col-sm-10"> 
                        <input type="text"  className="form-control" id="inputName" placeholder="" value={age} name="fname" onChange={(e)=>setage(e.target.value)}/>
                        </div> 
                      </div>
                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Sex</label>
                        <div className="col-sm-10"> 
                        <input type="text"  className="form-control" id="inputName" placeholder="" value={sex} name="fname" onChange={(e)=>setsex(e.target.value)}/>
                        </div> 
                      </div>
                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Height</label>
                        <div className="col-sm-10"> 
                        <input type="text"  className="form-control" id="inputName" placeholder="" value={height} name="fname" onChange={(e)=>setheight(e.target.value)}/>
                        </div> 
                      </div>
                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Weight</label>
                        <div className="col-sm-10"> 
                        <input type="text"  className="form-control" id="inputName" placeholder="" value={weight} name="fname" onChange={(e)=>setweight(e.target.value)}/>
                        </div> 
                      </div>
                       <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Record chronic disease</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="inputName" placeholder="" value={chronic} name="fname" onChange={(e)=>setchronic(e.target.value)}/>
                          {errors.fname && <span className='validationError'>Required</span>}
                        </div> 
                      </div>
                       <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Record drug allergies</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="inputName" placeholder="" value={drug} name="fname" onChange={(e)=>setdrug(e.target.value)}/>
                          {errors.fname && <span className='validationError'>Required</span>}
                        </div> 
                      </div>

                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Record bp</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="inputName" placeholder="" value={bp} name="fname" onChange={(e)=>setbp(e.target.value)}/>
                          {errors.fname && <span className='validationError'>Required</span>}
                        </div> 
                      </div>

                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Way to communicate side effects</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="inputName" placeholder="" value={sideEffect} name="fname" onChange={(e)=>setsideEffect(e.target.value)}/>
                          {errors.fname && <span className='validationError'>Required</span>}
                        </div> 
                      </div>

                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Reminder to take bp by text message</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="inputName" placeholder="" value={remindBPTextMsg} name="fname" onChange={(e)=>setremindBPTextMsg(e.target.value)}/>
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

                  {/* <div className="active tab-pane" id="settings">
                    <form className="form-horizontal">
                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Coupon Code</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="inputName" placeholder="..." name="fname" value={couponCode} onChange={(e)=>setCouponCode(e.target.value)}/>
                          {errors.fname && <span className='validationError'>Required</span>}
                        </div> 
                      </div>
  
                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Coupon Description</label>
                        <div className="col-sm-10">
                        <Editor
       						 name="description"
                   value={couponDescription}
       						 onChange={(data) => {
       						   setCouponDescription(data);
       						 }}
        					editorLoaded={editorLoaded}
      					/>

                          {errors.lname && <span className='validationError'>Required</span>}
                        </div>
                      </div> 


                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Coupon Type</label>
                        <div className="col-sm-10"> 
                        <select className="form-control" onChange={(e)=>setCouponType(e.target.value)}>
                          <option>{couponType}</option>
                          <option>Percentage Discount</option>
                          <option>Fixed Cart Discount</option>
                          <option>Fixed Product Discount</option> 
                        </select>
                        </div> 
                      </div> 
                       <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Coupon Usage</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="inputName" placeholder="Eg: 100 people" name="fname" value={couponUsage} onChange={(e)=>setCouponUsage(e.target.value)}/>
                          {errors.fname && <span className='validationError'>Required</span>}
                        </div> 
                      </div>
                       <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Coupon Expire Date</label>
                        <div className="col-sm-10">
                          <input type="date"  className="form-control" id="inputName" placeholder="Eg: 100 people" name="fname" value={couponExpire} onChange={(e)=>setCouponExpire(e.target.value)}/>
                          {errors.fname && <span className='validationError'>Required</span>}
                        </div> 
                      </div>

      
 
                      
                      <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                          <button type="button" className="btn btn-danger" onClick={(e)=>onSubmit()}>Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>  */}
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