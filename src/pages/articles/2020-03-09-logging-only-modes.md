---
templateKey: blog-post
title: "Things I like: logging-only modes"
date: 2020-04-03T11:18:00.000Z
featuredpost: false
featuredimage: ../../img/logging.jpg
description: Building confidence in scary deployments
tags:
  - likes
---
Sometimes, you need to deploy a change you're a little worried about. Sure, it passed the automated testing, and it worked fine in preproduction, but once you put it out there in the real world, it gets exposed to users who do weird things. Wrong things. Stupid things. But they're still your users, and you care about them, so you want to make sure their crazy, unpredictable inputs are handled gracefully.

I saw an example like this on a project I worked on. We were providing a platform where users could upload their own APIs and then call them through our infrastructure. We wanted to put some controls in place to detect requests that looked suspicious (injection attacks, for example) and reject them, thus protecting our users.

However, reliably detecting malicious requests is a tricky problem. Our users were permitted considerable flexibility in their API design, so we were concerned they might have some legitimate code that failed our tests. False positives mean incorrectly rejected requests and unhappy users. We wrote tests for every edge case we could think of, but it's a bold claim to state we'd thought of every possible input.

Rather than allowing ourselves to become paralysed by fear, and never getting the code deployed, we first deployed it in **logging only mode**. What this means is that the code ran as normal, performed its checks, decided whether or not the request was acceptable, and then **took no action** expect logging the result. No requests were rejected.

From the users' point of view, nothing changed. But we gained visibility of the performance of our code, in production, against real inputs, with no risk of disruption. We were then free to tweak as required, watching the number of false positives dwindle with each change. Once you have been running in logging-only mode, in production, for an appropriate amount of time (let your business needs decide this), with no unwanted behaviour, you can turn it on properly with real confidence that it won't disrupt your users.

For those implementing this pattern, I have a couple of recommendations to share. Firstly, it's convenient to have a single config parameter that switches between logging-only mode and normal mode. Ideally, this should be changeable without a redeployment, so you can quickly switch back to logging mode if the need arises. Secondly, you need to take care that your log messages accurately capture what has happened. Logging a message saying 'request rejected', when your code was in logging-only mode and so didn't really reject anything, is likely to confuse the reader of your logs.
