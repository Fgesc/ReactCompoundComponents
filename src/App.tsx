import { useState } from 'react';
import { Form } from './components/Form';
import './App.css';

function App() {
    const [formData, setFormData] = useState<Record<string, string>>({});

    const onSubmit = () => {

        const cleaned = Object.fromEntries(
            Object.entries(formData).map(([key, value]) => [key, value.trim()])
        );

        if (!Object.keys(cleaned).length || Object.values(cleaned).some(v => v === '')) {
            return;
        }

        console.log('formData', JSON.stringify(cleaned));   
    };

    return (
        <Form setFormData={setFormData}>
            <Form.Row>
                <Form.Input id="name" placeholder="Имя" />
                <Form.Input id="surname" placeholder="Фамилия" />
            </Form.Row>
            <Form.Row>
                <Form.Input id="address" placeholder="Адрес" />
            </Form.Row>

            <Form.Button onClick={onSubmit}>Сохранить</Form.Button>
        </Form>
  );
}

export default App;
