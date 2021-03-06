import { useState } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { Container, FluidContainer, Btn } from '../../components';
import { Title, Form, FormInput, Label, Inpt, Para } from './JobExperience.elements';

const JobExperienceForm = () => {
	const [content, setContent] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log('content', content);
		setContent('');
	};

	return (
		<FluidContainer>
			<Container>
				<Title>Interview Experience</Title>
				<Para>Have any interview experience? Write your experience in below form and help others so that they can also get insight about it!</Para>
				<Form onSubmit={handleSubmit}>
					<FormInput>
						<Label>Name</Label>
						<Inpt type="text" placeholder='e.g, Nihal' />
					</FormInput>
					<FormInput>
						<Label>Email</Label>
						<Inpt type="email" placeholder='e.g, nihal@abc.com' />
					</FormInput>
					<FormInput>
						<Label>Job Title</Label>
						<Inpt type="text" placeholder='e.g, Software Developer' />
					</FormInput>
					<FormInput>
						<Label>Company</Label>
						<Inpt type="text" placeholder='e.g, Amazon' />
					</FormInput>

					<FormInput>
						<Label>Your Experience</Label>
						<CKEditor
							editor={ClassicEditor}
							onChange={(e, editor) => setContent(editor.getData())}
							data={content}
							config={{
								default: {
									height: '500px',
								},
							}}
						/>
					</FormInput>
					<Btn type='submit'>Submit</Btn>
				</Form>
			</Container>
		</FluidContainer>
	);
};

export default JobExperienceForm;
