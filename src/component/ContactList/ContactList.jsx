import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Contact, ContactItem, BtnDelete } from './ContactList.styles';
import { operation, selectors } from "../../redux";


const ContactsList = () => {
    const contacts = useSelector(selectors.getVisibleContacts);
    const dispatch = useDispatch();
    const onDeleteContact = (id) => {
        dispatch(operation.deleteContact(id));
        console.log(id);
    }
    useEffect(() => {
        dispatch(operation.fetchContact())
    }, [dispatch])
   
    return (
        <Contact>
            {contacts.map(({ id, name, number }) => (
                <ContactItem key={id}>
                    <span>
                        {name}:
                    </span>
                    
                    
                    <span>{number}</span>
                    <BtnDelete onClick={() => onDeleteContact(id)}>Delete</BtnDelete>
                </ContactItem>
            ))}
        </Contact>
    )
}
export default ContactsList;