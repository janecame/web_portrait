import '../../App.css';
import './IdolPage.css';
import './../Form.css';
import Posts from '../Posts';
import {PostData} from '../../services/PostData';
//import CardItem from './../CardItem';
//import './../Cards.css';
import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class IdolPage extends Component {

constructor(props) {
super(props);

this.state = {

userFeed: '',
redirectToReferrer: false,
name:'',
};

this.getUserFeed = this.getUserFeed.bind(this);
this.logout = this.logout.bind(this);
}

componentWillMount() {

if(sessionStorage.getItem("userData")){
this.getUserFeed();
}

else{
this.setState({redirectToReferrer: true});
}

}


getUserFeed() {

let data = JSON.parse(sessionStorage.getItem("userData"));
this.setState({name:data.userData.name});
let postData = { user_id: data.userData.user_id};

if (data) {
PostData('feed', postData).then((result) => {
let responseJson = result;
if(responseJson.feedData){
this.setState({data: responseJson.feedData});
console.log(this.state);
}
});
}

}

logout(){
sessionStorage.setItem("userData",'');
sessionStorage.clear();
this.setState({redirectToReferrer: true});
}

render() {
if (this.state.redirectToReferrer) {
return (<Redirect to={'/products'}/>)
}

return (
		<>
			<div className="profile_container">
				<div className="profile_cover">
				 	<img src="../../images/img-11.jfif" alt="my_cover" className="image_cover" />
						<div className="profile">
							<img src="../../images/c.jpeg" alt="my_profile" className="profile_img"/>
						</div>
					
					
				</div>
				<div className="profile_center">
					<div className="profile_input">
						<div className="row">
						  <div className="column_1">
						    <h2>{this.state.name}</h2>
						    <p>Some text..</p>
						  </div>
						  <div className="column_2">
						     <form>
							    <label for="fname">Upload files</label><br/>
							    <input type="file" id="fname" name="firstname" placeholder="Your name.."/>
								<input type="submit" variant="primary" value="upload"/>
							 </form>
							 <Posts />
						  </div>
						</div>
					</div>
				</div>
			
			</div>
			</>
	);
}
}

export default IdolPage;