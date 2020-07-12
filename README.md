# Node-JS-Shell-Programing-using-Parent-Child


Coding Exercise 1:
Problem Statement:
1.1 Write a program in node js to access parameters from the command line where the
user should enter the filename as an argument.
1.2 Handle error if cases are not passed correctly.
1.3 Using the exec function of the child_process module, read the content of the file and
display on the standard output device.
1.4 List the directory where this file exists.
Coding Exercise 2:
Problem Statement:
2.1 Write a program to read the file content which is passed by the master process to
child process using a fork.
2.2 Child process should get the parameter from the master, read the content from the
file and stream it to master so that the master process can display the content on the
screen.
2.3 Close the files to avoid a memory leak. Handle errors related to file io in fork
process.
Coding Exercise 3:
Problem Statement:
3.1 Write a program to accept command-line arguments for username and password
with validation and return status with mocked logic. Create a custom module for this.
3.2 Create a Module called A and write two methods x(), y(). Consume Module A in
another custom module B and expose method c(). Test method from c() from Module
B in app.js.c() method should be an instance method. If possible, implement inter-
module communication between A and B with event handling and test it in app.js.
3.3 Write a program to control the event loop with Process.nextTick() and invoke a
custom method. Also, code for the unconditional exit if an error occurs.
