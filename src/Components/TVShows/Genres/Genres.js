import React from 'react';
import { Select } from 'antd'
import styles from './Genres.module.css'

const { Option } = Select;


export const Genres = ({onChange}) => {
    const [size, setSize] = React.useState('default');

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
        <Option key='Horror'> Horror</Option>
        <Option key='Science-Fiction'> Science-Fiction</Option>
        <Option key='Mystery'> Mystery</Option>
        <Option key='Romance'> Romance</Option>
        <Option key='Crime'> Crime</Option>
        <Option key='Music'> Music</Option>
      </Select>
        </div>
        
    )
}