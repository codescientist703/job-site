import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {
	Container,
	FluidContainer,
	Btn,
	Breadcumb,
	Title,
} from '../../components';
import { Form, FormInput, Label, Inpt, Para } from './JobExperience.elements';
import axios from '../../axios';
import { toast } from 'react-toastify';

const JobExperienceForm = () => {
	const breadData = [
		{ name: 'home', link: '/' },
		{ name: 'Interview Experience Form', link: '/contribute-your-experience' },
	];

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
			successToast('Your experience has been successfully submitted !');
		} catch (error) {
			const errorData = error.response.data;
			if (errorData.content) {
				errorData.content.forEach(errorToast);
			}
		}
	};
	const successToast = (message) => {
		toast.success(message);
	};
	const errorToast = (message) => {
		toast.error(message);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await submitData();
		resetForm();
	};
	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const resetForm = () => {
		setFormData({
			...formData,
			name: '',
			jobtitle: '',
			company: '',
			email: '',
		});
		setFormData({
			...formData,
			content: '',
		});
	};

	return (
		<FluidContainer>
			<Container>
				<Breadcumb breadData={breadData} />
				<Title>Share Your Interview Experience</Title>
				<Para>
					Have any interview experience? Write your experience in below form and
					help others so that they can also get insight about it!
				</Para>
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
