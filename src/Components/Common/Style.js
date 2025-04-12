
const Style = ({ attributes, id }) => {
	const { styles } = attributes;

	const mainSl = `#${id}`;
	const boxContentSl = `${mainSl} .box-content`;
	const containerSl = `${boxContentSl} .container`;
	const contentBoxOneSl = `${containerSl} .content-box-one`;
	const contentInnerSl = `${contentBoxOneSl} .content-inner`;
	const singleBoxsl = `${contentInnerSl} .single-box`;
	const textBoxSl = `${singleBoxsl} .text-box`;

	return <style dangerouslySetInnerHTML={{
		__html: `
		${textBoxSl}{
		border: 2px solid ${styles?.borderColor} ;
		background-color: ${styles?.bg};

		}
	

	`}} />;
}
export default Style;