import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Container, FluidContainer, Btn } from '../../components';
import { Title, Form, FormInput, Label, Inpt, Para } from './JobExperience.elements';
import axios from '../../axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
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
			const response = await axios.post(apiUrl, formData);
			console.log(response.data);
		} catch (error) { }
	};
	const notify = () => {
		toast('Wow so easy!', { position: toast.POSITION.TOP_LEFT });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		submitData();
		notify();
	};
	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const resetForm = () => {
		setFormData({
			name: '',
			jobtitle: '',
			company: '',
			email: '',
			content: '',
		});
	};

	return (
		<FluidContainer>
			<Container>
				<Title>Interview Experience</Title>
				<Para>Have any interview experience? Write your experience in below form and help others so that they can also get insight about it!</Para>
				<Form onSubmit={handleSubmit} method='POST'>
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
