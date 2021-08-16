import React from 'react';
import { Footer } from '../Components';

export function FooterContainer() {
	return (
		<Footer>
			<Footer.Title>Questions? Contact us</Footer.Title>
			<Footer.Break />
			<Footer.Row>
				<Footer.Column>
					<Footer.Link>FAQS</Footer.Link>
					<Footer.Link>Investors Relations</Footer.Link>
					<Footer.Link>Ways To Watch</Footer.Link>
					<Footer.Link>Cooperate Information</Footer.Link>
					<Footer.Link>Netflix Originals</Footer.Link>
				</Footer.Column>

				<Footer.Column>
					<Footer.Link>Help Center</Footer.Link>
					<Footer.Link>Jobs</Footer.Link>
					<Footer.Link>Terms Of Use</Footer.Link>
					<Footer.Link>Contact Us</Footer.Link>
				</Footer.Column>
				<Footer.Column>
					<Footer.Link>Account</Footer.Link>
					<Footer.Link>Redeem Gift Cards</Footer.Link>
					<Footer.Link>Privacy</Footer.Link>
					<Footer.Link>Speed Test</Footer.Link>
				</Footer.Column>

				<Footer.Column>
					<Footer.Link>Media Center</Footer.Link>
					<Footer.Link>Buy Gift Cards</Footer.Link>
					<Footer.Link>Cookes Preferences</Footer.Link>
					<Footer.Link>Legal Notices</Footer.Link>
				</Footer.Column>
			</Footer.Row>

			<Footer.Break />
			<Footer.Text>Netflix India</Footer.Text>
		</Footer>
	);
}
