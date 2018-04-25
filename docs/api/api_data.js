define({ "api": [
  {
    "type": "post",
    "url": "/batch",
    "title": "Bus Factor",
    "description": "<p>Returns results of batch requests</p>",
    "name": "Batch",
    "group": "Batch_POST_JSON_of_api_requests",
    "version": "0.0.0",
    "filename": "augur/server.py",
    "groupTitle": "Batch_POST_JSON_of_api_requests"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/committer_locations",
    "title": "Commits and Location by User",
    "name": "CommitterLocations",
    "group": "Diversity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"login\": \"bonnie\",\n        \"location\": \"Rowena, TX\",\n        \"commits\": 12\n    },\n    {\n        \"login\":\"clyde\",\n        \"location\":\"Ellis County, TX\",\n        \"commits\": 12\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "augur/server.py",
    "groupTitle": "Diversity"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/dependencies",
    "title": "List of dependencies from libraries.io",
    "name": "Dependencies",
    "group": "Ecosystem",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {   \"full_name\": \"rails/rails\"\n        \"description\": \"Ruby on Rails\", \n        \"fork\": false, \"created_at\": \"2008-04-11T02:19:47.000Z\", \n        \"updated_at\": \"2017-09-20T20:16:47.181Z\", \n        \"pushed_at\": \"2017-09-20T19:39:08.000Z\", \n        \"homepage\": \"http://rubyonrails.org\", \n        \"size\": 155199, \"stargazers_count\": 36993, \n        \"language\": \"Ruby\", \"has_issues\": true, \n        \"has_wiki\": false, \n        \"has_pages\": false, \n        \"forks_count\": 15130, \n        \"mirror_url\": null, \n        \"open_issues_count\": 1157, \n        \"default_branch\": \"master\", \n        \"subscribers_count\": 2452,\n        \"uuid\": \"8514\", \"source_name\": null, \n        \"license\": \"MIT\", \"private\": false, \n        \"contributions_count\": 2616, \n        \"has_readme\": \"README.md\", \n        \"has_changelog\": null, \n        \"has_contributing\": \"CONTRIBUTING.md\", \n        \"has_license\": \"MIT-LICENSE\", \n        \"has_coc\": \"CODE_OF_CONDUCT.md\", \n        \"has_threat_model\": null, \n        \"has_audit\": null, \n        \"status\": null, \n        \"last_synced_at\": \"2017-09-20T20:16:47.153Z\", \n        \"rank\": 28, \"host_type\": \"GitHub\", \n        \"host_domain\": null, \n        \"name\": null, \n        \"scm\": \"git\", \n        \"fork_policy\": null,\n         \"github_id\": \"8514\", \n         \"pull_requests_enabled\": null, \n         \"logo_url\": null, \n         \"github_contributions_count\": 2616, \n         \"keywords\": [\"activejob\", \"activerecord\", \"html\", \"mvc\", \"rails\", \"ruby\"], \n         \"dependencies\": [\n                            {   \"project_name\": \"websocket-driver\", \n                                \"name\": \"websocket-driver\", \n                                \"platform\": \"rubygems\", \n                                \"requirements\": \"~> 0.6.1\", \n                                \"latest_stable\": \"0.7.0\", \n                                \"latest\": \"0.7.0\", \n                                \"deprecated\": false, \"outdated\": true, \n                                \"filepath\": \"actioncable/actioncable.gemspec\", \"\n                                kind\": \"runtime\"\n                            }\n                         ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "augur/server.py",
    "groupTitle": "Ecosystem"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/dependency_stats",
    "title": "List of libraries.io stats",
    "name": "DependencyStats",
    "group": "Ecosystem",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"dependencies\": \"10\", \n        \"dependent_projects\": \"10.6K\", \n        \"dependent_repositories\": \"392K\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "augur/server.py",
    "groupTitle": "Ecosystem"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/dependents",
    "title": "List of dependants from libraries.io",
    "name": "Dependents",
    "group": "Ecosystem",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"login\": \"bonnie\",\n        \"location\": \"Rowena, TX\",\n        \"commits\": 12\n    },\n    {\n        \"login\":\"clyde\",\n        \"location\":\"Ellis County, TX\",\n        \"commits\": 12\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "augur/server.py",
    "groupTitle": "Ecosystem"
  },
  {
    "type": "get",
    "url": "/ghtorrent_range",
    "title": "Range of dates covered by GHTorrent",
    "name": "GhtorrentRange",
    "group": "Misc",
    "version": "0.0.0",
    "filename": "augur/server.py",
    "groupTitle": "Misc"
  },
  {
    "type": "get",
    "url": "/",
    "title": "API Status",
    "name": "Status",
    "group": "Misc",
    "version": "0.0.0",
    "filename": "augur/server.py",
    "groupTitle": "Misc"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/linking_websites",
    "title": "Linking Websites",
    "description": "<p>Returns an array of websites and their rank according to http://publicwww.com/</p>",
    "name": "LinkingWebsites",
    "group": "Popularity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"url\": \"missouri.edu\",\n        \"rank\": \"1\"\n    },\n    {\n        \"url\": \"unomaha.edu\",\n        \"rank\": \"2\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "augur/server.py",
    "groupTitle": "Popularity"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/commits/comments",
    "title": "count of commit comments weekly",
    "name": "CommitComments",
    "group": "Timeseries",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {   \"date\":\"2009-02-16T00:00:00.000Z\",\n        \"comments\":1.0\n    },\n    {   \"date\":\"2009-07-12T00:00:00.000Z\",\n        \"comments\":2.0\n    },",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "augur/server.py",
    "groupTitle": "Timeseries"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/commits?group_by=:group_by",
    "title": "Commits",
    "name": "Commits",
    "group": "Timeseries",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "group_by",
            "description": "<p>(Default to week) Allows for results to be grouped by day, week, month, or year</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"date\": \"2015-01-01T00:00:00.000Z\",\n        \"commits\": 153\n    },\n    {\n        \"date\": \"2015-01-08T00:00:00.000Z\",\n        \"commits\": 192\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "augur/server.py",
    "groupTitle": "Timeseries"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/community_age",
    "title": "Timeline of events to determine the age of a community",
    "name": "CommunityAge",
    "group": "Timeseries",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"login\": \"bonnie\",\n        \"location\": \"Rowena, TX\",\n        \"commits\": 12\n    },\n    {\n        \"login\":\"clyde\",\n        \"location\":\"Ellis County, TX\",\n        \"commits\": 12\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "augur/server.py",
    "groupTitle": "Timeseries"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/community_engagement",
    "title": "",
    "name": "Community_Engagement",
    "group": "Timeseries",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n      \"date\": \"2009-04-01T00:00:00.000Z\",\n      \"issues_opened\": 1.0,\n      \"issues_closed\": 0.0,\n      \"pull_requests_opened\": 0.0,\n      \"pull_requests_merged\": 0.0,\n      \"pull_requests_closed\": 0.0,\n      \"issues_opened_total\": 2.0,\n      \"issues_closed_total\": 0.0,\n      \"issues_closed_rate_this_window\": 0.0,\n      \"issues_closed_rate_total\": 0.0,\n      \"issues_delta\": 1.0,\n      \"issues_open\": 2.0,\n      \"pull_requests_opened_total\": 0.0,\n      \"pull_requests_closed_total\": 0.0,\n      \"pull_requests_closed_rate_this_window\": null,\n      \"pull_requests_closed_rate_total\": null,\n      \"pull_requests_delta\": 0.0,\n      \"pull_requests_open\": 0.0\n    },                       \n    {\n      \"date\": \"2009-04-16T00:00:00.000Z\",\n      \"issues_opened\": 2.0,\n      \"issues_closed\": 1.0,\n      \"pull_requests_opened\": 1.0,\n      \"pull_requests_merged\": 1.0,\n      \"pull_requests_closed\": 1.0,\n      \"issues_opened_total\": 3.0,\n      \"issues_closed_total\": 5.0,\n      \"issues_closed_rate_this_window\": 4.0,\n      \"issues_closed_rate_total\": 6.0,\n      \"issues_delta\": 1.0,\n      \"issues_open\": 2.0,\n      \"pull_requests_opened_total\": 3.0,\n      \"pull_requests_closed_total\": 5.0,\n      \"pull_requests_closed_rate_this_window\": null,\n      \"pull_requests_closed_rate_total\": null,\n      \"pull_requests_delta\": 2.0,\n      \"pull_requests_open\": 1.0\n    }                       \n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "augur/server.py",
    "groupTitle": "Timeseries"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/contributions",
    "title": "Contributions by Week",
    "name": "ContributionsByWeek",
    "group": "Timeseries",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ],
        "String": [
          {
            "group": "String",
            "optional": false,
            "field": "user",
            "description": "<p>Limit results to the given user's contributions</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n     {\n         \"date\": \"2015-01-01T00:00:00.000Z\",\n         \"commits\": 37.0,\n         \"pull_requests\": null,\n         \"issues\": null,\n         \"commit_comments\": 7.0,\n         \"pull_request_comments\": 8.0,\n         \"issue_comments\": 17.0\n     },\n     {\n         \"date\": \"2015-01-08T00:00:00.000Z\",\n         \"commits\": 68.0,\n         \"pull_requests\": null,\n         \"issues\": 12.0,\n         \"commit_comments\": 18.0,\n         \"pull_request_comments\": 13.0,\n         \"issue_comments\": 28.0\n     }\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "augur/server.py",
    "groupTitle": "Timeseries"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/downloads",
    "title": "Number of downloads",
    "description": "<p>Timeseries of downloads from package manager</p>",
    "name": "Downloads",
    "group": "Timeseries",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"date\": \"2015-01-01T00:00:00.000Z\",\n        \"downlads\": 235\n    },\n    {\n        \"date\": \"2015-01-08T00:00:00.000Z\",\n        \"dowloads\": 327\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "augur/server.py",
    "groupTitle": "Timeseries"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/forks?group_by=:group_by",
    "title": "Forks",
    "name": "Forks",
    "group": "Timeseries",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "group_by",
            "description": "<p>(Default to week) Allows for results to be grouped by day, week, month, or year</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"date\": \"2015-01-01T00:00:00.000Z\",\n        \"forks\": 13\n    },\n    {\n        \"date\": \"2015-01-08T00:00:00.000Z\",\n        \"forks\": 12\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "augur/server.py",
    "groupTitle": "Timeseries"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/issues/response_time",
    "title": "Issue Response Time",
    "name": "IssueResponseTime",
    "group": "Timeseries",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"created_at\": \"2013-09-16T17:00:54.000Z\",\n        \"responded_at\": \"2013-09-16T17:20:58.000Z\"\n    },\n    {\n        \"created_at\": \"2013-09-16T09:31:34.000Z\",\n        \"responded_at\": \"2013-09-16T09:43:03.000Z\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "augur/server.py",
    "groupTitle": "Timeseries"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/issues/closed",
    "title": "",
    "name": "Issues",
    "group": "Timeseries",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n      \"date\": \"2011-03-19T00:00:00.000Z\",\n      \"issues_closed\": 3\n    },\n    {\n      \"date\": \"2011-03-20T00:00:00.000Z\",\n      \"issues_closed\": 0\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "augur/server.py",
    "groupTitle": "Timeseries"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/issues/activity",
    "title": "",
    "name": "Issues",
    "group": "Timeseries",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n      \"date\": \"2010-12-23T00:00:00.000Z\",\n      \"count\": 0.0,\n      \"action\": \"closed\"\n    },\n    {\n      \"date\": \"2010-12-23T00:00:00.000Z\",\n      \"count\": 2.0,\n      \"action\": \"opened\"\n    },\n    {\n      \"date\": \"2010-12-23T00:00:00.000Z\",\n      \"count\": 8.0,\n      \"action\": \"reopened\"\n    },\n    {\n      \"date\": \"2010-12-23T00:00:00.000Z\",\n      \"count\": 12.0,\n      \"action\": \"open\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "augur/server.py",
    "groupTitle": "Timeseries"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/issues?group_by=:group_by",
    "title": "Issues",
    "name": "Issues",
    "group": "Timeseries",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "group_by",
            "description": "<p>(Default to week) Allows for results to be grouped by day, week, month, or year</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"date\": \"2015-01-01T00:00:00.000Z\",\n        \"issues\":13\n    },\n    {\n        \"date\": \"2015-01-08T00:00:00.000Z\",\n        \"issues\":15\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "augur/server.py",
    "groupTitle": "Timeseries"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/tags/major",
    "title": "Tags for major releases timeseries",
    "description": "<p>Timeseries of Major release tags</p>",
    "name": "Major_Release_Tags",
    "group": "Timeseries",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"date\": \"2015-01-01T00:00:00.000Z\",\n        \"release\": 1.0.0\n    },\n    {\n        \"date\": \"2015-01-08T00:00:00.000Z\",\n        \"release\": 2.0.0\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "augur/server.py",
    "groupTitle": "Timeseries"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/pulls/acceptance_rate",
    "title": "Pull Request Acceptance Rate by Week",
    "description": "<p>For each week, the rate is calculated as (pull requests merged that week) / (pull requests opened that week)</p>",
    "name": "PullRequestAcceptanceRate",
    "group": "Timeseries",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"date\": \"2015-01-01T00:00:00.000Z\",\n        \"rate\": 0.5\n    },\n    {\n        \"date\": \"2015-01-08T00:00:00.000Z\",\n        \"rate\": 0.33\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "augur/server.py",
    "groupTitle": "Timeseries"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/pull_request_comments",
    "title": "count of new pull request comments weekly",
    "name": "PullRequestComments",
    "group": "Timeseries",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {   \"date\":\"2009-02-16T00:00:00.000Z\",\n        \"comments\":1.0\n    },\n    {   \"date\":\"2009-07-12T00:00:00.000Z\",\n        \"comments\":2.0\n    },",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "augur/server.py",
    "groupTitle": "Timeseries"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/pulls",
    "title": "Pull Requests by Week",
    "name": "PullRequestsByWeek",
    "group": "Timeseries",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"date\": \"2015-01-01T00:00:00.000Z\",\n        \"pull_requests\": 1\n        \"comments\": 11\n    },\n    {\n        \"date\": \"2015-01-08T00:00:00.000Z\",\n        \"pull_requests\": 2\n        \"comments\": 31\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "augur/server.py",
    "groupTitle": "Timeseries"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/stargazers?group_by=:group_by",
    "title": "Stargazers",
    "name": "Stargazers",
    "group": "Timeseries",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "group_by",
            "description": "<p>(Default to week) Allows for results to be grouped by day, week, month, or year</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"date\": \"2015-01-01T00:00:00.000Z\",\n        \"watchers\": 133\n    },\n    {\n        \"date\": \"2015-01-08T00:00:00.000Z\",\n        \"watchers\": 54\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "augur/server.py",
    "groupTitle": "Timeseries"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/tags",
    "title": "Tags release timeseries",
    "description": "<p>Timeseries of tags</p>",
    "name": "Tags",
    "group": "Timeseries",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"date\": \"2015-01-01T00:00:00.000Z\",\n        \"release\": 0.5\n    },\n    {\n        \"date\": \"2015-01-08T00:00:00.000Z\",\n        \"release\": 0.5.1\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "augur/server.py",
    "groupTitle": "Timeseries"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/total_committers",
    "title": "count of new committers weekly",
    "name": "UniqueCommitters",
    "group": "Timeseries",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {   \"date\":\"2009-02-16T00:00:00.000Z\",\n        \"total_total_committers\":1.0\n    },\n    {   \"date\":\"2009-07-12T00:00:00.000Z\",\n        \"total_total_committers\":2.0\n    },\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "augur/server.py",
    "groupTitle": "Timeseries"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/issue_comments",
    "title": "count of new comments weekly",
    "name": "uniqueCommenters",
    "group": "Timeseries",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {   \"date\":\"2009-02-16T00:00:00.000Z\",\n        \"total_unique_comments\":1.0\n    },\n    {   \"date\":\"2009-07-12T00:00:00.000Z\",\n        \"total_unique_comments\":2.0\n    },\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "augur/server.py",
    "groupTitle": "Timeseries"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/watchers",
    "title": "",
    "name": "Community_Engagement",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n  {\n    \"watchers\": 40349\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "augur/server.py",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/bus_factor",
    "title": "Bus Factor",
    "description": "<p>Returns an integer that is the number of developers that have a summed percentage of contributions higher than the threshold</p>",
    "name": "GitHub",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"best\": \"5\",\n        \"worst\": \"1\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "augur/server.py",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/contributors",
    "title": "Total Contributions by User",
    "name": "TotalContributions",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n     {\n         \"login\": \"foo\",\n         \"location\": \"Springfield\",\n         \"commits\": 1337.0,\n         \"pull_requests\": 60.0,\n         \"issues\": null,\n         \"commit_comments\": 158.0,\n         \"pull_request_comments\": 718.0,\n         \"issue_comments\": 1668.0\n     },\n     {\n         \"login\": \"bar\",\n         \"location\": null,\n         \"commits\": 3968.0,\n         \"pull_requests\": null,\n         \"issues\": 12.0,\n         \"commit_comments\": 158.0,\n         \"pull_request_comments\": 718.0,\n         \"issue_comments\": 1568.0\n     }\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "augur/server.py",
    "groupTitle": "Users"
  }
] });
