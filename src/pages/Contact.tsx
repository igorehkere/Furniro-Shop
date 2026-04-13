import { Hat } from "../ui/Hat"
import { Support } from "../ui/Support"
import { ContactInform } from "../ui/ContactInform"

export function Contact() {
    return (
        <div>
            <Hat namePage='contact'/>
            <ContactInform/>
            <Support/>
        </div>
    )
}