import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Container, FluidContainer, Btn } from '../../components';
import { Title, Form, FormInput, Label, Inpt } from './JobExperience.elements';
import axios from '../../axios';

const JobExperienceForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		jobtitle: '',
		company: '',
		email: '',
		content: '',
	});
	const submitData = async () => {
		try {
			const apiUrl = 'interview/create/';
			axios.post(apiUrl, formData);
			const response = await response;
			console.log(response.data);
		} catch (error) {}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		submitData();
	};
	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<FluidContainer>
			<Container>
				<Title>Interview Experience</Title>
				<Form onSubmit={handleSubmit}>
					<FormInput>
						<Label>Name</Label>
						<Inpt
							placeholder='e.g, Nihal'
							required
							name='name'
							value={formData.name}
							onChange={onChange}
						/>
					</FormInput>
					<FormInput>
						<Label>Email</Label>
						<Inpt
							placeholder='e.g, nihal@abc.com'
							type='email'
							required
							name='email'
							value={formData.email}
							onChange={onChange}
						/>
					</FormInput>
					<FormInput>
						<Label>Job Title</Label>
						<Inpt
							placeholder='e.g, Software Developer'
							required
							name='jobtitle'
							value={formData.jobtitle}
							onChange={onChange}
						/>
					</FormInput>
					<FormInput>
						<Label>Company</Label>
						<Inpt
							placeholder='e.g, Amazon'
							required
							name='company'
							value={formData.company}
							onChange={onChange}
						/>
					</FormInput>

					<FormInput>
						<Label>Your Experience</Label>
						<CKEditor
							editor={ClassicEditor}
							onChange={(e, editor) =>
								setFormData({ ...formData, ['content']: editor.getData() })
							}
							data={formData.content}
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
