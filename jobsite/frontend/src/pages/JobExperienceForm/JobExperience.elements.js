import styled from 'styled-components/macro';

export const Title = styled.h1`
	font-size: ${({ theme }) => theme.h1};
	text-align: center;
	margin: ${({ theme }) => theme.titleMargin};
`;

export const Para = styled.p`
	margin-left: 0.2rem;
	margin-bottom: 0.7rem;
	font-size: ${({ theme }) => theme.p}rem;
`;

export const Form = styled.form`
	width: 100%;
	padding: 1.5rem;
	background-color: #fff;
	border-radius: 10px;
	border: 1px solid #d9d9d9;
`;

export const FormInput = styled.div`
	width: 100%;
	margin-bottom: 1.5rem;
	.ck-editor .ck-editor__editable {
		min-height: 500px;
	}
`;

export const Label = styled.p`
	margin-bottom: 0.3rem;
	/* margin-left: 0.2rem; */
	font-size: 1rem;
`;

export const Inpt = styled.input`
	width: 100%;
	padding: 0.6rem;
	text-indent: 10px;
	font-size: 1.04rem;
	border: none;
	border-bottom: 1px solid #c4c4c4;
	border-radius: 3px;
	background: #f5f5f5;
	outline: none;

	&::placeholder {
		font-size: 1rem;
	}
`;
