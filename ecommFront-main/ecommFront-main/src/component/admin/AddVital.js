import React, {useEffect,useState} from 'react'
import {Link} from "react-router-dom";
import Header from '../../header/Header';
import Sidebarr from '../../sidebar/Sidebar';
import Tool from '../../sidebar/Tool';
import Footer from '../../footer/Footer';
import {AddVitalAction} from "../../action";
import {useDispatch,useSelector} from "react-redux";
import { useForm } from "react-hook-form";
import { MultiSelect } from "react-multi-select-component";

import Editor from "./Editor";

  
export default function AddVital() {
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
  const [temprature,settemprature] = useState("");
  const [pulse1,setpulse1] = useState("");
  const [pulse2,setpulse2] = useState("");
  const [weight,setweight] = useState("");
  const [oxygenSaturation,setoxygenSaturation] = useState("");



const onSubmit = () => { 
   const data={
    temprature,
    pulse1,
    pulse2,
    weight,
    oxygenSaturation

  } 
   dispatch(AddVitalAction(data)); 
}


  useEffect(() => {
    setEditorLoaded(true);
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
                    to="/managevital"
                    type="button"
                    className="btn btn-success" 
                    data-toggle="tooltip"
                    title="Add"
                    >
                    <i className="fa fa-eye" />
                    {" View Vital"}
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
                            <label htmlFor="inputName" className="col-sm-2 control-label">Temprature F</label>
                            <div className="col-sm-10">
                            <input type="text"  className="form-control" id="inputName" placeholder="" name="fname" value={temprature} onChange={(e)=>settemprature(e.target.value)}/>
                            {errors.fname && <span className='validationError'>Required</span>}
                            </div> 
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputName" className="col-sm-2 control-label">Pulse 1 per min</label>
                            <div className="col-sm-10">
                            <input type="text"  className="form-control" id="inputName" placeholder="" name="fname" onChange={(e)=>setpulse1(e.target.value)}/>
                            {errors.fname && <span className='validationError'>Required</span>}
                            </div> 
                        </div>
    
                        <div className="form-group">
                            <label htmlFor="inputName" className="col-sm-2 control-label">Pulse 2 per min</label>
                            <div className="col-sm-10">
                            {/* <Editor
                            name="description"
                            onChange={(data) => {
                                setaddress(data);
                            }}
                            editorLoaded={editorLoaded}
                            /> */}
                            <input type="text"  className="form-control" id="inputName" placeholder="" name="fname" onChange={(e)=>setpulse2(e.target.value)}/>

                            {errors.lname && <span className='validationError'>Required</span>}
                            </div>
                        </div> 


                        <div className="form-group">
                            <label htmlFor="inputName" className="col-sm-2 control-label">Weight</label>
                            <div className="col-sm-10"> 
                            <input type="text"  className="form-control" id="inputName" placeholder="" name="fname" onChange={(e)=>setweight(e.target.value)}/>
                            </div> 
                        </div> 
                        
                        <div className="form-group">
                            <label htmlFor="inputName" className="col-sm-2 control-label">Oxygen Saturation %</label>
                            <div className="col-sm-10"> 
                            <input type="text"  className="form-control" id="inputName" placeholder="" name="fname" onChange={(e)=>setoxygenSaturation(e.target.value)}/>
                            </div> 
                        </div>
                        {/* <div className="form-group">
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
                        </div> */}

                        
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