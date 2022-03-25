import { Checkbox } from 'antd';
import React, { useState } from 'react';
import { Modal } from 'antd';

function Singinform(){
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  
    const [passwordShown, setPasswordShown] = useState(false);

    return (
      <>
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <h2>
              Sign In
          </h2>
          <input type='text' placeholder='Email or Phone Number'/>
          <br/>
          <br/>
         <div> <input type={passwordShown ? "text" : "password"} />
          <button type='button'>show</button>
         </div>
          <Checkbox> Remember me</Checkbox> <span>Need help?</span>
        </Modal>
      </>
    );
  };

  export default Singinform