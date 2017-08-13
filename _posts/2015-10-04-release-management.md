---
layout: post
title: Release management
date: 2015-10-04 00:00:00 +0000
tags: tech
excerpt: Over the last year we have been busy building a new platform, a private affair with no production builds, user base or client to worry about. It was a peaceful time full of hasty changes, huge refactors and features that only lived a few sprints.
---

## Questions

Over the last year we have been busy building a new platform, a private affair with no production builds, user base or client to worry about. It was a peaceful time full of hasty changes, huge refactors and features that only lived a few sprints.

Then it was time to go live and the messy build approach was not going to cut it. People wanted to know when they could expect changes, how much those changes would affect them, and how things were changing. The problem was we didn’t know.

To answer those questions with confidence we implemented some simple steps that meant this information was always available.


## Roadmap — when to expect changes

Planning work is hard, especially in an agile world where change in inevitable. Putting effort into timing when features are built six months to a year in advance is a waste; either the feature will have changed or be gone by the time you get to it.

Instead we chose to create a short roadmap of three months (six sprints). The focus of this roadmap was not features, instead we used statements of success. Features can move, mutate and die without breaking the roadmap as long as success still looks the same. Being short and ‘fuzzy’, our roadmap allows for more flexibility and still fulfils the goal of communicating when things will change.


## Semver — effect of the changes

Hopefully every programmer has adopted some form of source control management. Whether Mercurial, SVN, Git, or one of the myriad of others that play an important part in the development lifecycle. Everyone has a story where an SCM system has saved them. Semantic Versioning is there to save you too, although not from your changes but from other peoples.

It is a simple way to communicate how drastic your changes will be. If anything has been done that will break backwards compatibility, or anything added that may make people’s lives easier. This simply communicates the effect of changes by giving an idea of the scale.


## Changelog — how things are changing

A version is really designed to help dependency management software, rather than you or I — more context is needed for humans. A changelog can give this context and is as simple as it sounds: a human readable list of every change. Collating one though, is not so simple.

There is usually a disconnect between the work being done and the code being written. Emails, ticketing systems, task lists, todo lists — not to mention developer mistakes — all make finding which changes are in which version difficult. Luckily your SCM has an accurate list of all changes. With little effort it can be formatted and output as a readable log. Using conventional changelog commit messages and automated tasks, this process can become quick and easy. Now communicating how things have changed is as simple as sharing your changelog.


## Answers

These three simple steps have increased communication about what changes have been made and helped answer the questions that are being asked. At first I was worried the effort needed to produce stricter versions and a changelog would be huge. We found out that with small changes to how we branch code and how we write our commit messages we were able to achieve these results with little to no effort. As time goes on more questions will be asked and our process will have to evolve, but for a first iteration we are happy with the results.
