import style from './ContactInform.module.css'

export function ContactForm () {
    return (
        <div className={style.form}>
            <div className={style.address}>
                <div className={style.location}>
                    <img src='./src/location.svg'/>
                    <div className={style.dv}>
                        <p className={style.bold}>Address</p>
                        <p>236 5th SE Avenue, New York NY10000, United States</p>
                    </div>
                </div>
                <div className={style.phone}>
                    <img src='./src/phone.svg'/>
                    <div className={style.dv}>
                        <p className={style.bold}>Phone</p>
                        <p>Mobile: +(84) 546-6789</p>
                        <p>Hotline: +(84) 456-6789</p>
                    </div>
                </div>
                <div className={style.clock}>
                    <img src='./src/clock.svg'/>
                    <div className={style.dv}>
                        <p className={style.bold}>Working Time</p>
                        <p>Monday-Friday: 9:00 - 22:00</p>
                        <p>Saturday-Sunday: 9:00 - 21:00</p>
                    </div>
                </div>
            </div>
            <div className={style.inp}>
                <p>Your name</p>
                <input placeholder='Abc'/>
                <p>Email address</p>
                <input placeholder='Abc@def.com'/>
                <p>Subject</p>
                <input placeholder='This is an optional'/>
                <p>Message</p>
                <input placeholder="Hi! I'd like to ask about"/>
                <button>Submit</button>
            </div>
        </div>
    )
}