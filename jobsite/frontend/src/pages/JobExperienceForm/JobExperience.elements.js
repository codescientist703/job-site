import styled from 'styled-components/macro';

export const Para = styled.p`
	margin-left: 0.2rem;
	margin-bottom: 0.7rem;
	font-size: ${({ theme }) => theme.p}rem;
`;

export const Form = styled.form`
	width: 100%;
	padding: 1rem;
	background-color: #fff;
	border-radius: 10px;
	border: 1px solid #d9d9d9;

	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		padding: 1.5rem;
	}
`;

export const FormInput = styled.div`
	width: 100%;
	margin-bottom: 1.5rem;
	/* .ck-editor .ck-editor__editable {
		min-height: 500px;
	} */
	.jodit-container:not(.jodit_inline) .jodit-wysiwyg {
		padding: 1rem 1.7rem;
		min-height: 400px !important;
	}

	.jodit-placeholder {
		padding: 1rem 1.7rem;
	}
`;

export const Label = styled.p`
	margin-bottom: 0.3rem;
	font-size: 1rem;
`;

export const Inpt = styled.input`
	width: 100%;
	padding: 0.6rem;
	text-indent: 10px;
	font-size: 1.04rem;
	border: 1px solid rgba(117, 121, 231, 0.5);
	border-radius: 3px;
	outline: none;

	&::placeholder {
		font-size: 1rem;
	}
`;
