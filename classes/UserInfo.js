class UserInfo{
    constructor(){
        document.querySelector('.user-info__button-edit').addEventListener('click', this.setUserInfo);
        editForm.addEventListener('submit', this.updateUserInfo);
    }
    setUserInfo(){
        userName.value = userNameText.textContent;
        userJob.value = userJobText.textContent;
    }
    updateUserInfo(){
        userNameText.textContent = userName.value;
        userJobText.textContent = userJob.value;
        event.preventDefault();
    }
}

const info = new UserInfo(userName.value, userJob.value);
