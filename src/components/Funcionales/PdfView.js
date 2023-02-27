import React, { Component, useEffect } from 'react';

const Pdf = ({match}) => {

    var pdfUrl = match.params.urlpdf;
/* 

 componentDidMount() {
        if(typeof window.orientation !== "undefined"){
            document.getElementById('enlaceDescargarPdf').click();
            window.close();
        }
    }*/
        return (
            <div style={{position: 'absolute', width: '100%', height: '100%'}}>
                {
                    pdfUrl == 1 ?
                    <object
                data={require('../../assets/PDF/inta_-_mi_casa-_mi_huerta.pdf')}
                type="application/pdf"
                width="100%"
                height="100%"
                >
                    <br />
                    <a href={require('../../assets/PDF/inta_-_mi_casa-_mi_huerta.pdf')} id="enlaceDescargarPdf"
                    download="ReactJS.pdf"
                    >Tu dispositivo no puede visualizar los PDF, da click aquí para descargarlo</a>
                </object>
                :
                (
                    pdfUrl== 2 ?
                    <object
                data={require('../../assets/PDF/script-tmp-manual_de_cultivos_para_la_huerta_organica_familiar_-.pdf')}
                type="application/pdf"
                width="100%"
                height="100%"
                >
                    <br />
                    <a href={require('../../assets/PDF/script-tmp-manual_de_cultivos_para_la_huerta_organica_familiar_-.pdf')} id="enlaceDescargarPdf"
                    download="ReactJS.pdf"
                    >Tu dispositivo no puede visualizar los PDF, da click aquí para descargarlo</a>
                </object>
                :
                <object
                data={require('../../assets/PDF/diario_de_mi_huerta_0.pdf')}
                type="application/pdf"
                width="100%"
                height="100%"
                >
                    <br />
                    <a href={require('../../assets/PDF/diario_de_mi_huerta_0.pdf')} id="enlaceDescargarPdf"
                    download="ReactJS.pdf"
                    >Tu dispositivo no puede visualizar los PDF, da click aquí para descargarlo</a>
                </object>
                )

                }
            </div>
        );
}

export default Pdf;