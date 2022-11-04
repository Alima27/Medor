<template>
	<div>
		<Contact />
		<Form />
	</div>
</template>

<script>
import Contact from '~/components/contacts/Contact.vue'
import Form from '~/components/contacts/Form.vue'
export default {
  components: {
		Contact,
    Form
  },
}
</script>