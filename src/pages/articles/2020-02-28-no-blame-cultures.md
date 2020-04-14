---
templateKey: blog-post
title: "Things I like: no-blame cultures"
date: 2020-02-28T19:35:00.000Z
featuredpost: false
featuredimage: ../../img/blame.jpg
description: The path to process improvements
tags:
  - likes
  - culture
---
Picture the scene: something broke in production. If you're doing it right, it was detected by your monitoring tools. If you're doing it wrong, your users helpfully informed you: by email, on the phone, through Twitter. You desperately scramble around for a solution. You roll back a release, modify some configuration, reboot a machine. Something worked; production is back up. The phones stop ringing. You take a deep breath.

Now the alarms have stopped ringing, you identify the problem. You check some logs, see what deployments have happened recently, talk it over with the team. After a while, you have a solid understanding of exactly what went wrong and what could have been done to prevent it.

>**Now what do you do?**

All problems are obvious with hindsight. Maybe the developer left a bug in the code, maybe QA didn't think of that test scenario, maybe someone misconfigured the server. There will be at least one person, and possibly several, who could have done something better and that would have avoided the problem. So its their fault, right? *Wrong*. Humans make mistakes. Always have, always will. If your quality strategy relies on humans not making mistakes, you don't have a quality strategy.

When things go wrong, fix them, then learn from them. Can you change your tools or processes in a way that prevents this from happening in the future? If you replace the human, and leave the system alone, then you're just begging for the same problem to happen again. Your new human is no less error-prone than the last one; the true fault lies elsewhere.

<br>

In early 2017, AWS suffered a [significant outtage](https://www.theregister.co.uk/2017/03/01/aws_s3_outage/), impacting a whole host of big-name internet services. Their [response](https://aws.amazon.com/message/41926/) is a great example of what this post is about. They didn't blame their employee (seriously, who has never made a typo?), but correctly asked whether it was reasonable that their tool was able to remove so much capacity in one command. Then they asked how they could improve things so a similar issue could be recovered from faster in the future. *Then* they asked how their could make their fault reporting system resistant to such outages. Asking these questions, and ensuring that the actions identified are prioritised, is how you drive improvements to your process. (Disclaimer: I obviously have no idea what happened to this employee internally at Amazon. Their blog post talks extensively about tool and process improvements they intend to make, which I interpret as an acknowledgement that the user wasn't at fault).

Ironically, some [sites](https://www.vox.com/2017/3/2/14792636/amazon-aws-internet-outage-cause-human-error-incorrect-command) reporting on the issue  claimed that Amazon had blamed the outage on human error, which is (in my opinion) a complete mischaracterisation of Amazon's response.

<br>

While I was writing this post, I began to wonder if I'd gone in a bit too strong. Am I really suggesting that there are no cases in which blame is appropriate? I had been watching Formula 1: Drive to Survive on Netflix, as Season 2 had recently been released, and Episode 2 follows the struggles of the Haas team through the 2019 season. At the British Grand Prix the team decide to run their two cars in different setups in an attempt to better understand their poor performance. On lap 1, the two Haas drivers, Kevin Magnussen and Romain Grosjean, collided with each other, damaging both cars and resulting in early retirements for them both. I expect this preventing them from gathering any meaningful data and rendered the entire race a write-off.

Is a certain amount of blame not appropriate here? The team principal, Günther Steiner, certainly thought so, as the episode follows the uncomfortable dressing-down he gives to his two drivers. I have a certain amount of sympathy with his viewpoint - what processes could be added or modified to prevent driver collisions? Particularly for team mates, who are acutely that they are constantly being judged against each other. It seems this has always been a part of Formula 1 and I don't expect that to change.

Imagine my surprise then, when in a later episode, Toto Wolff (the Mercedes team principal) specifically references their no-blame culture:

>"*When you screw up, you want to identify the person. It's how the human mind works. But we have a no-blame culture. We blame the problem rather than the person - which is easier said than done.*"
<div style="text-align: right">Toto Wolff, Mercedes F1 Team Principal (F1: Drive to Survive - Season 2 Episode 4: Dark Days)</div>
<br>

If Mercedes, winners of the last 6 consecutive Drivers' and Constructors' Championships, feel that there is still room for a no-blame culture in the highly charged environment that is Formula 1, then that is good enough for me!