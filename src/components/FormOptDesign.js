import React from 'react';

class FormOptDesing extends React.Component {
    render() {
        const STYLEPALETTE11 = {backgroundColor: '#114e4e'}
        const STYLEPALETTE12 = {backgroundColor: '#438792'}
        const STYLEPALETTE13 = {backgroundColor: '#a2deaf'}

        const STYLEPALETTE21 = {backgroundColor: '#420101'}
        const STYLEPALETTE22 = {backgroundColor: '#bd1010'}
        const STYLEPALETTE23 = {backgroundColor: '#e95626'}

        const STYLEPALETTE31 = {backgroundColor: '#3e5b65'}
        const STYLEPALETTE32 = {backgroundColor: '#eab052'}
        const STYLEPALETTE33 = {backgroundColor: '#a0c0cf'}

        const STYLEPALETTE41 = {backgroundColor: '#600060'}
        const STYLEPALETTE42 = {backgroundColor: '#aa00aa'}
        const STYLEPALETTE43 = {backgroundColor: '#ff00ff'}

        const STYLEPALETTE51 = {backgroundColor: '#005500'}
        const STYLEPALETTE52 = {backgroundColor: '#008000'}
        const STYLEPALETTE53 = {backgroundColor: '#00aa55'}

        return (
            <fieldset className="design--card">
                <legend className="hidden">diseña</legend>
                <h2 className=" design__title design__title2 js__title--form">{this.props.title}</h2>
                <div className="desing__form--container">
                    <div className="design__form ">
                        <h3 className="colors__title">colores</h3>
                        <div className="design__form--colors">
                            <ul className="design__colors-list">
                                <li className="palette">
                                    <label htmlFor="p1" className="palette__option">
                                        <input className="radio__palette radio__palette1" type="radio" name="palette" value="palette1" id="p1"
                                            checked />
                                        <ul className="palette--colors">
                                            <li className="color__box p1--color1" style= {{STYLEPALETTE11}}>cyprus</li>
                                            <li className="color__box p1--color2" style={{STYLEPALETTE12}}>hippie blue</li>
                                            <li className="color__box p1--color3" style={{STYLEPALETTE13}}>chinook</li>
                                        </ul>
                                    </label>
                                </li>
                                <li className="palette">
                                    <label htmlFor="p2" className="palette__option">
                                        <input className="radio__palette radio__palette2" type="radio" name="palette" value="palette2" id="p2" />
                                        <ul className="palette--colors">
                                            <li className="color__box p2--color1" style={{STYLEPALETTE21}}>seal brown</li>
                                            <li className="color__box" style={{STYLEPALETTE22}}>free speech red</li>
                                            <li className="color__box" style={{STYLEPALETTE23}}>cinnabar</li>
                                        </ul>
                                    </label>
                                </li>
                                <li className="palette">
                                    <label htmlFor="p3" className="palette__option">
                                        <input className="radio__palette radio__palette3" type="radio" name="palette" value="palette3" id="p3" />
                                        <ul className="palette--colors">
                                            <li className="color__box p3--color1" style={{STYLEPALETTE31}}>san juan</li>
                                            <li className="color__box p3--color2" style={{STYLEPALETTE32}}>casablanca</li>
                                            <li className="color__box p3--color3" style={{STYLEPALETTE33}}>regent st blue</li>
                                        </ul>
                                    </label>
                                </li>
                                <li className="palette">
                                    <label htmlFor="p4" className="palette__option">
                                        <input className="radio__palette radio__palette4" type="radio" name="palette" value="palette4" id="p4" />
                                        <ul className="palette--colors">
                                            <li className="color__box p4--color1" style={{STYLEPALETTE41}}>purple</li>
                                            <li className="color__box" style={{STYLEPALETTE42}}>medium orchid</li>
                                            <li className="color__box" style={{STYLEPALETTE43}}>light purple</li>
                                        </ul>
                                    </label>
                                </li>
                                <li className="palette">
                                    <label htmlFor="p5" className="palette__option">
                                        <input className="radio__palette radio__palette5" type="radio" name="palette" value="palette5" id="p5" />
                                        <ul className="palette--colors">
                                            <li className="color__box p5--color1" style={{STYLEPALETTE51}}>super dark green</li>
                                            <li className="color__box" style={{STYLEPALETTE52}}>green</li>
                                            <li className="color__box" style={{STYLEPALETTE53}}>lawnish green</li>
                                        </ul>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </fieldset>
        );
    }
}

export default FormOptDesing;