import React from 'react'
import moon from './assets/img/moonlight.svg'
import './assets/css/dashboard.css'
import { Link } from 'react-router-dom'
import { CupHot } from 'react-bootstrap-icons'
import {getAnalytics , logEvent } from "firebase/analytics";
import firebase from 'firebase/compat/app'
const analytics = getAnalytics(firebase.app());
export default function App() {
	React.useEffect(() => {
    // Track pageview
    logEvent(analytics, 'page_view', { page_title: 'Homepage' });
  }, []);

  const handleNotesClick = () => {
    // Track link click
    logEvent(analytics, 'select_content', { content_type: 'link', content_id: 'notes_link' });
  };

  const handleTaskboardClick = () => {
    // Track link click
    logEvent(analytics, 'select_content', { content_type: 'link', content_id: 'taskboard_link' });
  };

  const handleCommunityClick = () => {
    // Track link click
    logEvent(analytics, 'select_content', { content_type: 'link', content_id: 'community_link' });
  };

  const handleContributionsClick = () => {
    // Track link click
    logEvent(analytics, 'select_content', { content_type: 'link', content_id: 'contributions_link' });
  };

  const handleAboutClick = () => {
    // Track link click
    logEvent(analytics, 'select_content', { content_type: 'link', content_id: 'about_link' });
  };

	return (
		<>
			<section className="py-4 px-4 px-sm-1 cdin">
				<div className="container ">
					<div className="d-sm-flex align-items-center justify-content-between mainc">
						<div className="img-home">
							<h1 className="heading">RE<span></span><span className="text-secondary">SOC</span></h1>
							<p className="lead my-4">
								RESOC: The coolest academic notes-sharing platform around!
							</p>
						</div>
						<img className="img-fluid w-50 d-none d-sm-block" src={moon} alt="in office" />
					</div>
				</div>
			</section>
			<div className='mt-3 px-3 px-sm-5'>
				<div className="container">
					<p>
						RESOC is the coolest academic notes-sharing platform around, built by a bunch of tech-savvy students at Silicon Institute, and it's totally free ❤️. You don't have to sell your soul to afford good quality notes anymore. <br></br>
						<b><Link onClick={handleNotesClick} to='/notes' className='fw text-var'>Check out the notes</Link></b>
					</p>
					<p>
						We have a nifty <Link onClick={handleTaskboardClick} to="/taskboard" className='text-var'>
							task section</Link> for you to manage your work.  No more forgetting deadlines and drowning in assignments.
						Pop over to the <Link onClick={handleCommunityClick} to="/community" className='text-var' >community chat page</Link> and give us a holler. We're always happy to help out and connect with like-minded folks. You might even make a new study buddy or two! We're looking for active contributions and you're always welcome to <Link onClick={handleContributionsClick} to='/contributions' className='text-var'>contribute</Link> to RESOC :)
					</p>
					<p>
						Oh, and if you really dig what we're doing here at RESOC, we'd be over the moon if you'd consider sponsoring us. Just head over to the <Link onClick={handleAboutClick} to="/aboutus" className='text-var'>about section</Link> and donate to our talented content creators. Trust us, it really helps keep the site running and lets us add all sorts of fun new features!
					</p>
				<div>
						<a href='https://github.com/sponsors/fuzzymfx' className='text-var' 
						target='_blank' rel="noreferrer">
						<CupHot size={30} style={{
							marginRight: "10px",
							color : "#FF5E5B"
						}}
						 />
						 Buy us a coffee!
						</a>
					</div>
					</div>
			</div>
		</>
	)
}
