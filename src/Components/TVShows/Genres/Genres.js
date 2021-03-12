import React from 'react';
import { Select } from 'antd'
import styles from './Genres.module.css'

const { Option } = Select;


export const Genres = ({onChange}) => {
    const [size, setSize] = React.useState('default');

    function handleChange(value) {
     console.log(`Selected: ${value}`);
    }
    
    const handleSizeChange = e => {
    setSize(e.target.value);
    };
    return (
        <div className={styles.genresList}>
        <Select
        mode="multiple"
        size={size}
        placeholder="Please select genres"
        defaultValue={[]}
        onChange={onChange}
        style={{ width: '100%' }}
        >
        <Option key='Drama' > Drama </Option>
        <Option key='Action'> Action </Option>
        <Option key='Fantasy'> Fantasy </Option>
        <Option key='Comedy'> Comedy</Option>
        <Option key='Thriller'> Thriller</Option>
      </Select>
        </div>
        
    )
}