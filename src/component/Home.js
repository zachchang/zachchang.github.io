import React from 'react';
import '../App.css';
import YellgarImg from '../dist/images/yellgar01.png';
import Helper from '../dist/images/helper.png';
import { Popup } from 'semantic-ui-react'
import { Link as Rlink} from 'react-router-dom';

class Home extends React.Component {

	render () {
		return (
			<div className="home">
				{/* nav */}
				<div className="ui large secondary pointing menu" id="page-zero-menu">
					<div className="left item">
						<Rlink to="/">
							<div className="item" id="page-zero-menu-content">Zach</div>
						</Rlink>
					</div>
					<div className="right item">
						<Rlink to="/about">
							<div className="item" id="page-zero-menu-content">about</div>
						</Rlink>
					</div>
				</div>
				<div className="content">
					<div className="title">
						<h1>Hi, I’m Zach Chang, a Digital Product Developer.</h1>
						<h2>I have 2-year experience in digital product development as a <span>UI/UX designer</span> and <span>front-end developer</span>. As a  Digital Product Developer, I enjoy applying programing, design and research to embrace the challenges that works can bring.</h2>
						<h2>
							If you are looking for a digital product developer, please feel free to 
							<Popup trigger={<span className="contact"> contact me</span>} flowing hoverable>
							zachdesign01@gmail.com
						  </Popup>

						</h2>
					</div>
					<div className="project">
						<h1>PROJECTS</h1>
						<div className="project-content">
							<img src={YellgarImg} alt="productimg-yellgar"/>
							<div className="intro">
								<h2>Yellgar</h2>
								<h3><span>Platform: </span>Desktop, tablet and mobile</h3>
								<h3><span>Responsibilities: </span>UX, UI, Visual design, Setting development objectives, and used CSS3 with Bootstrap to develop  RWD and rich styling WebPages.</h3>
								<div className="project-button">
									<button>Development Process</button>
									<a target="_blank" href="https://www.yellgar.com">
										<button className="right-button">View Site</button>
									</a>
								</div>
							</div>
						</div>
						<div className="project-content">
							<img src={Helper} alt="productimg-yellgar"/>
							<div className="intro">
								<h2>Homeless Helper</h2>
								<h3><span>Platform: </span>Desktop, tablet and mobile</h3>
								<h3><span>Responsibilities: </span>UX design and front-end develpoment. The front-end use SCSS, ReactJS and Material-Ui to build a web app with form validation, crud, grid list, and communicate with back-end via RESTful API.</h3>
								<div className="project-button">
									<a target="_blank" href="https://homeless-helper.doyouaflavor.tw/">
										<button>View Site</button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;