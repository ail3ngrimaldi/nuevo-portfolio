import '../styles/ContactForm.css';

export default function ContactForm () {

    return (
    <div>
        <div className='contactform__container'>
            <label htmlFor='name'>Name:</label>
                <input type='text' placeholder='Juan Font' className='input__contactform' name='name' id='name'/>
            <label htmlFor='email'>E-mail:</label>
                <input type='email' placeholder='heregoes@youremail.com' className='input__contactform' name='email' id='email'/>
            <label htmlFor='subject'>Subject:</label>
                <input type='text' placeholder='Open position' className='input__contactform' name='subject' id='subject'/>
            <label htmlFor='content'>Content:</label>
                <textarea type='text' placeholder='Here goes your email body' cols='75' rows='5' className='input__contactform email__content' name='content' id='content'/>
            <button className='button__contactform' type='onSubmit'>SEND</button>
        </div>
    </div>
    );
}