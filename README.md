# Lab 5

Name: Haotong Wu  
Partner(s): None  

Note: Due to a late add, my assigned group partner had already completed most parts of the lab. Therefore, I completed this lab independently.

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

I would not use only a unit test to test the full “message” feature. Writing and sending a message is not just one small function. It depends on several parts working together, such as the text input, the send button, the backend, and possibly the database or another user receiving the message. A unit test could still be useful for smaller parts of the feature, but the full message feature would need integration or end-to-end testing to make sure the whole process works correctly.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, I would use a unit test for the “max message length” feature. This feature is more isolated because it mainly checks whether the text is longer than the allowed limit, such as 80 characters. Since the expected behavior is clear and does not require many other parts of the app to work together, a unit test would be a good way to check both valid and invalid inputs.

https://timhaotongwu.github.io/Lab5_Starter/expose.html

https://timhaotongwu.github.io/Lab5_Starter/explore.html

