function pdfToHTML(){
	var pdf=new jsPDF('p','pt','letter');
	source=$('#pdf2htmldiv')[0];

	specialElementHandlers={
		'#bypassme':function(element,renderer){
			return true;

		}
	}

	margins={
		top:50,
		left:60,
		width:540,

	};

	pdf.fromHTML(
           source,
            margins.left,
            margins.top,
           {
           	'width':margins.width,
           	 'elementHandlers':specialElementHandlers
           },
           function dispose(){
           	pdf.save('htmltopdf.pdf');
           }
	);
}