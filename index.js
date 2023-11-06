import yargs from 'yargs';

import * as contactsService from './contacts.js';

const invokeAction = async ({ action, contactId, name, email, phone }) => {
	switch (action) {
		case 'list':
			const allContacts = await contactsService.listContacts();
			return console.log(allContacts);
		case 'getById':
			const oneContact = await contactsService.getContactById(contactId);
			return console.log(oneContact);
		case 'add':
			const newContact = await contactsService.addContact({
				name,
				email,
				phone,
			});
			return console.log(newContact);
		case 'deleteById':
			const deleteContact = await contactsService.removeContact(contactId);
			return console.log(deleteContact);
		default:
			colsole.log('unknown action');
	}
};

const { argv } = yargs(process.argv.slice(2));
invokeAction(argv);

// invokeAction({ action: 'list' });
// invokeAction({ action: 'getById', contactId: 'qdggE76Jtbfd9eWJHrssH' });
// invokeAction({
// 	action: 'add',
// 	name: 'Luis Armstrong',
// 	email: 'lui@gmail.com',
// 	phone: '(211) 820-1635',
// });
// invokeAction({
// 	action: 'deleteById',
// 	contactId: 'qdggE76Jtbfd9eWJHrssH',
// });
