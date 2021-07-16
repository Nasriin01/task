import React from 'react'
import Logo from './images/logo-pie-people.svg'
import Checked from './images/checked (2).svg'
import Reject from './images/reject.png'
import {    
    makeStyles,
    createStyles,
    Theme,
    Table, 
    TableCell, 
    TableBody, 
     TableHead,
      TableFooter,  
      TableRow,
      
} from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        portal:{
           width: '1366px',
           height: '764px',
           padding: '0 0 0 23px',
            backgroundColor: '#ffffff',
        },
        rectangle:{
            width: '1366px',
            height: '71px',
            margin:' 0 0 23px',
            padding: '8px 72px 8px 58px',
            boxShadow: '0 0 4px 0 rgba(0 ,0, 0 ,0.16)',
            backgroundColor: '#ffffff'
        },
        pielogo: {
            width: '55px',
            height: '55px',
            margin: '0 1113.2px 0 0',
            objectFit: 'contain',
        },
        client: {
            width: '67px',
            height: '28px',
            margin: '23px 1241px 26px 58px',
            fontFamily: 'Nexa',
            fontSize: '21px',
            fontWeight: 'bold',
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: '1.33',
            letterSpacing: 'normal',
            textAlign: 'center',
            color: ' #011627',
        },
        title:
        {
            marginLeft: '29px',
            width: '1366px'

        },
        text :{
            fontFamily: 'Nexa',
            fontSize :'13px',
            textDecoration: 'bold',
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: '1.31',
            letterSpacing: 'normal',
            textAlign: 'left',
            color: '#5387b4'

        },
        row:{
            fontFamily: 'Nexa',
            fontSize: '13px',
           
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: '1.31',
            letterSpacing: 'normal',
            textAlign: 'left',
            color: '#5387b4',
        },
        box1: {
            width: '60px',
            height: '20px',
            marginLeft: '10px',
            padding: '5px 15px 9px 9.5px',
            borderRadius: '5px',
            border: 'solid 1px #dbf6c1',
            backgroundColor: '#f6ffed'
        },
        box2: {
            width: '70px',
            height: '20px',
            marginLeft: '12px',
            padding: '5px 14px 8.7px 12px',
            borderRadius: '5px',
            border: 'solid 1px #e6e6e6',
            backgroundColor: '#fff1f0'
        },
        reject:{
            width: '12.8px',
            height: '12.8px',
          
            backgroundColor: '#873535'
        },
        checked: {
            width: '11.2px',
            height: '11.2px',
        
            objectFit: 'contain',
            backgroundColor: 'white'
        },
        flex: {
            display: 'flex',
            flexDirection: 'row'
        },
        txt :{
            fontFamily: 'Nexa',
            fontSize: '12px',
            fontWeight: 'bold',
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: '0.5',
            letterSpacing: '0.18px',
            textAlign: 'left',
            color: '#873535'
        },
        reason: {
            width: '9px',
            height: '0',
           
            border: 'solid 1px #314659'

        },
        box3: {
            width: '81px',
            height: '30px',
            marginLeft: '10px',
            borderRadius: '5px',
            border: 'solid 1px #e6e6e6'
        },
        rej:{
            width: '49px',
            height: '16px',
            margin:'0 2px 3px 4.5px',
            fontFamily: 'Nexa',
            fontSize: '12px',
            fontWeight: 'bold',
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: '0.5',
            letterSpacing: '0.18px',
            textAlign: 'center',
            color: '#314659'

        },
        dis:{
            width: '60px',
            height: '19px',
            marginLeft: '40px',
            fontFamily: 'Nexa',
            fontSize: '14px',
            
            fontTretch: 'normal',
            fontStyle: 'normal',
            lineHeight: '1.36',
            letterSpacing: 'normal' ,
            textLign: 'left',
            color: '#a9acaf'
        },
        to:{
            fontFamily: 'Nexa',
            fontSize: '14px',
            fontWeight: 'bold',
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: '1.36',
            letterSpacing: 'normal',
            textAlign: 'left',
            textDecoration: 'underline',
            color: '#181f28'
        },
        out:{
            width: '38px',
            marginLeft: '14px',
        
            height: '19px',
          
          
            fontFamily: 'Nexa',
          
            fontSize: '14px',
          
            
          
            fontStretch: 'normal',
          
            fontStyle: 'normal',
          
            lineHeight: '1.36',
        
            letterSpacing: 'normal',
            textAlign: 'left',
            color: '#a9acaf'
        },
        hun: {
            marginLeft: '24px',
  
            fontFamily: 'Nexa',
          
            fontSize: '14px',
          
            fontWeight:'bold',
          
            fontStretch: 'normal',
          
            fontStyle: 'normal',
          
            lineHeight: '1.36',
          
            letterSpacing: 'normal',
          
            textAlign: 'left',
          
            color: '#181f28',
        }






        

     
    }))
interface Columnfield{
  
    companyName: string;
    clientName: string;
    email: string;
    phoneNumber: number;
    action: string;
    reason: string;
    }
const data: Columnfield[] =[
    {
        companyName:'DSK Solutions',
        clientName: 'David Warner',
        email: 'davidwarner@gmail.com',
        phoneNumber: +919788118386,
        action: "",
        reason: 'Texas tea will be movin on up to the east side to a deluxe',


    }

]

    
const ClientTable=()=>{
    const classes = useStyles()
    return(
        <div className={classes.portal}>
        <div className={classes.rectangle} >

            <img src=  {Logo}  className={classes.pielogo}/>
        </div>
        <div>
        <h1 className={classes.client}>Clients</h1>
        <Table className="title">
                    <TableHead className={classes.text} >
                        <TableRow>
                            <TableCell >Company Name </TableCell>
                            
                            <TableCell align="left">Client Name  </TableCell>
                            <TableCell  align="left">Email</TableCell>
                            <TableCell align="left">Phone Number  </TableCell>
                            <TableCell  align="left">Action   </TableCell>
                            <TableCell  align="left">Reason</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                     {data.map((row)=>(
                        <TableRow key={row.companyName} className={classes.row}>
                            <TableCell>{row.companyName}</TableCell>
                            <TableCell>{row.clientName}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.phoneNumber}</TableCell>
                            <TableCell>
                            <div className={classes.flex} >
                                    <div className={classes.box1} ><img className={classes.checked} src= {Checked} />
                                    <span className={classes.txt}>Accept</span></div>
                                    <div className={classes.box2} ><img className={classes.reject} src= {Reject} /><span className={classes.txt}>Reject</span>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell  align="left"><p className={classes.reason}></p></TableCell>

                        </TableRow>  
                     
                     ))}
                    
                     {data.map((row)=>(
                        <TableRow key={row.companyName} className={classes.row}>
                            <TableCell>{row.companyName}</TableCell>
                            <TableCell>{row.clientName}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.phoneNumber}</TableCell>
                            <TableCell>
                            <div className={classes.flex} >
                                    <div className={classes.box1} ><img className={classes.checked} src= {Checked} />
                                    <span className={classes.txt}>Accept</span></div>
                                    <div className={classes.box2} ><img className={classes.reject} src= {Reject} /><span className={classes.txt}>Reject</span>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell  align="left"><p className={classes.reason}></p></TableCell>
                            </TableRow>
                 ))}
                         {data.map((row)=>(
                        <TableRow key={row.companyName} className={classes.row}>
                            <TableCell>{row.companyName}</TableCell>
                            <TableCell>{row.clientName}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.phoneNumber}</TableCell>
                            <TableCell>
                               <div className={classes.flex} >
                               
                                 <div className={classes.box3} >
                                    <span  className={classes.rej}>Rejected</span>
                                </div>
                           </div>
                            </TableCell>
                            <TableCell  align="left">{row.reason} <strong>Read more</strong></TableCell>
                            </TableRow>
                 ))}

                 
                {data.map((row)=>(
                        <TableRow key={row.companyName} className={classes.row}>
                            <TableCell>{row.companyName}</TableCell>
                            <TableCell>{row.clientName}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.phoneNumber}</TableCell>
                            <TableCell>
                            <div className={classes.flex} >
                                    <div className={classes.box1} ><img className={classes.checked} src= {Checked} />
                                    <span className={classes.txt}>Accept</span></div>
                                    <div className={classes.box2} ><img className={classes.reject} src= {Reject} /><span className={classes.txt}>Reject</span>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell  align="left"><p className={classes.reason}></p></TableCell>
                            </TableRow>
                 ))}
                 {data.map((row)=>(
                        <TableRow key={row.companyName} className={classes.row}>
                            <TableCell>{row.companyName}</TableCell>
                            <TableCell>{row.clientName}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.phoneNumber}</TableCell>
                            <TableCell>
                            <div className={classes.flex} >
                                    <div className={classes.box1} ><img className={classes.checked} src= {Checked} />
                                    <span className={classes.txt}>Accept</span></div>
                                    <div className={classes.box2} ><img className={classes.reject} src= {Reject} /><span className={classes.txt}>Reject</span>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell  align="left"><p className={classes.reason}></p></TableCell>
                            </TableRow>
                 ))}
                 
                 <TableFooter>
                            <TableRow>
                                <TableCell  align="left"><span className={classes.dis}>displaying </span></TableCell>
                                <TableCell  colSpan={4}><span className={classes.to}>25</span> <span className={classes.out}>Out Of</span><span className={classes.hun}>1300</span></TableCell>
                                <TableCell ><span className={classes.hun}>125-150 </span></TableCell>
                            </TableRow>

                            
                        </TableFooter>


                    </TableBody>
                    </Table>
        </div>
        </div>
    )
}
export default ClientTable;
