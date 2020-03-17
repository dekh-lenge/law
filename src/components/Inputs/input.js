import React from 'react';
// LIBRARIES
import cx from 'classnames';
// STYLES
import './styles.scss';

class InputDefault extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
	}

	getValue() {
		return this.props.inputRef.value;
	}

	setValue(value) {
		return (this.props.inputRef.value = value);
	}

	setFocus() {
		return this.props.inputRef.focus();
	}

	renderIsImportant() {
		return <span className="input__indicator--required">*</span>;
	}

	renderLabel() {
		const { label, required, labelClassName, labelStyle } = this.props;

		return (
			<label className={cx('input__label', labelClassName)} style={labelStyle}>
				{label}
				{required && this.renderIsImportant()}
			</label>
		);
	}

	handleEvent = (event) => {
		const { type } = this.props;
		if (event.type === "mousedown") {
			this.props.onMouseEvent && this.props.onMouseEvent("mousedown")
		} else {
			this.props.onMouseEvent && this.props.onMouseEvent("mouseup")
		}
	}

	renderShowPasswordIcon() {

		return (
			<img 
				className="show_password_img"
				src={require(`../../assets/eye.png`)}
				onMouseDown={ this.handleEvent } 
				onMouseUp={ this.handleEvent }
				width="20" 
				height="20"
				alt="" />
		);
	}

	render() {
		const { props } = this;
		let { inputRef } = props;
		const {
		type,
		primary,
		secondary,
		tertiary,
		flat,
		outline,
		small,
		medium,
		large,
		full,
		centered,
		isValid,
		hasLabel,
		validation,
		className,
		containerClassName,
		textClassName,
		text,
		textStyle,
		containerStyle,
		readonly,
		style,
		children,
		placeholder,
		minlength,
		maxlength,
		errorMsg,
		hasShowPasswordIcon,
		...others
		} = props;

		return (
		<div
			className={cx('input__container', containerClassName)}
			style={containerStyle}
		>
			{hasLabel && this.renderLabel()}

			{type !== 'textarea' ? (
			<input
				{...others}
				ref={ref => {
					inputRef = ref;
				}}
				type={type}
				maxLength={`${maxlength}`}
				minLength={`${minlength}`}
				className={cx(
				'input__element',
				{
					'input__element--primary': primary,
					'input__element--secondary': secondary,
					'input__element--flat': flat,
					'input__element--outline': outline,

					'input__element--small': small,
					'input__element--medium': medium,
					'input__element--large': large,
					'input__element--full': full,

					'input__element--valid': isValid && isValid !== null,
					'input__element--invalid': !isValid && isValid !== null,

					'input__element--centered': centered
				},
				className
				)}
				style={style}
				placeholder={placeholder}
			/>
			) : (
			<textarea
				{...others}
				ref={ref => {
					inputRef = ref;
				}}
				type={type}
				className={cx(
				'input__element',
				{
					'input__element--primary': primary,
					'input__element--secondary': secondary,
					'input__element--flat': flat,
					'input__element--outline': outline,

					'input__element--small': small,
					'input__element--medium': medium,
					'input__element--large': large,
					'input__element--full': full,

					'input__element--valid': isValid && isValid !== null,
					'input__element--invalid': !isValid && isValid !== null,

					'input__element--centered': centered
				},
				className
				)}
				style={style}
			/>
			)}
			<span className="errorMsg">{errorMsg}</span>
			{hasShowPasswordIcon && this.renderShowPasswordIcon()}
		</div>
		);
	}
}

InputDefault.propTypes = {};
InputDefault.defaultProps = {
  	isValid: true
};
export default InputDefault;
