# Photo Tape

## prod docker config start

``
$ docker build -t photo-tape-front .
$ docker run -p 3000:80 photo-tape-front
``

## for dev build - at docker-compose.yml change Docker to Docker.dev at config and:

``
$ docker-compose up
``

##Structure

##1. Photo-Tape
   #### a. main page
      * read photo from api
      * page navigation
      * mobile view
##2. Admin Page
   #### a. photo
      * upload
      * edit
      * tags
      * text
      * text editor
   #### b. settings
      * delete all
      * hide all
