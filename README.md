# Job search application built with Next.js/Elasticsearch


## Home page 

### You can search for jobs based on keyword/location/category/type
![home-page](/public/readme/home-jobs-app.jpg)


## Details page

![details-page](/public/readme/jobs-app-details.jpg)


## SETUP

### You will need to setup an elastic cluster
[Download and follow the instructions to install local elasticsearch cluster](https://www.elastic.co/downloads/elasticsearch "Elasticsearch website download page")

For cluster username and password I chose "username: elastic" "password: 123456"
if you chose different ones you will just need to replace username and password with your own when you run the requests down below.

### First you will need to create a mapping for the index which will store the jobs.

### Create a json file named "mapping.json" containing the mapping
```
{
  "mappings": {
    "properties": {
      "title": {
        "type": "text",
        "fields": {
          "keyword": {
            "type": "keyword"
          }
        }
      },
      "description:": {
        "type": "text"
      },
      "job_category": {
        "type": "keyword"
      },
      "job_type": {
        "type": "keyword"
      },
      "location": {
        "type": "keyword"
      },
      "responsibilities": {
        "type": "text"
      },
      "requirements": {
        "type": "text"
      }
    }
  }
}
```

### Run the following commands to add the index and mapping

### Linux/Mac
```
curl -X PUT http://localhost:9200/mapping_practice/ /
--header "Content-Type: application/json" /
--user elastic:123456 /
-d @mapping.json
```

### Windows
```
curl -X PUT http://localhost:9200/mapping_practice/ ^
--header "Content-Type: application/json" ^
--user elastic:123456 ^
-d @mapping.json
```
### To index jobs you can run the following curl commands (Make sure you create a json file (named job.json in my case) containing the job data before you run the request)

This is an example of how the json file should look.
```
{
  "title": "Test job",
  "description": "Test description",
  "job_type": "contract",
  "location": "Gabrovo",
  "responsibilities":["Array","of","responsibilities"],
  "requirements": ["Array", "of","requirements"]
}
```

### Linux/Mac
```
curl -X POST http://localhost:9200/mapping_practice/_doc /
--header "Content-Type: application/json" /
--user elastic:123456 /
-d @job.json
```

### Windows
```
curl -X POST http://localhost:9200/mapping_practice/_doc ^
--header "Content-Type: application/json" ^
--user elastic:123456 ^
-d @job.json
```