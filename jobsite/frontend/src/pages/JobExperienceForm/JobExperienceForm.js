import { useState, useRef } from 'react';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

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
	});
	const [content, setContent] = useState('');
	const submitData = async () => {
		try {
			const apiUrl = 'interview/create/';
			const validatedData = {
				...formData,
				content: content,
			};
			const response = await axios.post(apiUrl, validatedData);
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
			name: '',
			jobtitle: '',
			company: '',
			email: '',
		});
		setContent('');
	};

	const handleChange = (content) => {
		setContent(content);
	};
	const config = {
		formats: ['p', 'blockquote', 'pre', 'h2', 'h3', 'h4', 'h5', 'h6'],
		buttonList: [
			[
				'bold',
				'underline',
				'italic',
				'strike',
				'subscript',
				'superscript',
				'list',
			],
			['outdent', 'indent', 'formatBlock', 'align'],
			['table', 'link'],
			['undo', 'redo'],
		],
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
						<SunEditor
							autoFocus={true}
							width='100%'
							onChange={handleChange}
							height='500px'
							name='content'
							placeholder='Please share your experience here...'
							setContents={content}
							setOptions={config}
						/>
					</FormInput>
					<Btn type='submit'>Submit</Btn>
				</Form>
			</Container>
			<ToastContainer
				position='top-right'
				hideProgressBar={true}
				autoClose={7000}
				pauseOnHover={false}
				closeOnClick
			/>
		</FluidContainer>
	);
};

export default JobExperienceForm;
