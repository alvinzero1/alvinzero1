## docs.docker.com
ref: hub.docker.com

This texts was ref from https://youtu.be/gAGEar5HQoU off  https://docs.docker.com/

#### `wsl --update`
if alert to update newer WSL kernel version.
``` console
Microsoft Windows [Version 10.0.19044.2846]
(c) Microsoft Corporation. All rights reserved.

C:\Users\AlvinNg>wsl --update
Installing: Windows Subsystem for Linux
Windows Subsystem for Linux has been installed.
```
#### docker/getting-started
google> dockerhub getting-started
``` console
C:\Users\AlvinNg\zero1Wk32>docker run -d -p 80:80 docker/getting-started
Unable to find image 'docker/getting-started:latest' locally
latest: Pulling from docker/getting-started
c158987b0551: Pull complete
1e35f6679fab: Pull complete
cb9626c74200: Pull complete
b6334b6ace34: Pull complete
f1d1c9928c82: Pull complete
9b6f639ec6ea: Pull complete
ee68d3549ec8: Pull complete
33e0cbbb4673: Pull complete
4f7e34c2de10: Pull complete
Digest: sha256:d79336f4812b6547a53e735480dde67f8f8f7071b414fbd9297609ffb989abc1
Status: Downloaded newer image for docker/getting-started:latest
d141c13cf50dfd2809a52173a9f312a35ef1bb531f409648a5f1958ead57b751
```

#### `Port 80:80`
check on docker > Containers > Click `Port 80:80` to open browser

#### docker pull fedora
https://hub.docker.com/_/fedora
``` console
C:\Users\AlvinNg\zero1Wk32>docker pull fedora
Using default tag: latest
latest: Pulling from library/fedora
133d222e1578: Pull complete
Digest: sha256:a1aff3e01bb667ededb2e4d895a1f1f88b7d329bd22402d4a5ba5e7f1c7a48cb
Status: Downloaded newer image for fedora:latest
docker.io/library/fedora:latest
```
### docker --help
``` console
C:\Users\AlvinNg\zero1Wk32>docker --help
Usage:  docker [OPTIONS] COMMAND
A self-sufficient runtime for containers
Options:
      --config string      Location of client config files (default
                           "C:\\Users\\AlvinNg\\.docker")
...
C:\Users\AlvinNg\zero1Wk32>docker run --help
Usage:  docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
...
```
#### docker run fedora echo hello world
``` console
C:\Users\AlvinNg\zero1Wk32>docker run fedora echo hello world
hello world
C:\Users\AlvinNg\zero1Wk32>
```
Goto to Docker Desktop > Containers> fedora's Name
- `2023-04-22 14:38:45 hello world` shown at `Docker Desktop` too.

### docker run --help
``` console
C:\Users\AlvinNg\zero1Wk32>docker run --help
...
  -i, --interactive                    Keep STDIN open even if not attached
...
  -t, --tty                            Allocate a pseudo-TTY
...
```
### docker run -i -t fedora
``` console
C:\Users\AlvinNg\zero1Wk32>docker run -i -t fedora
[root@80aeb0f8be90 /]# echo hello world
hello world
[root@80aeb0f8be90 /]# yum install figlet
Fedora 38 - x86_64                                                                      4.0 MB/s |  66 MB     00:16
Fedora 38 openh264 (From Cisco) - x86_64                                                2.4 kB/s | 2.5 kB     00:01
Fedora Modular 38 - x86_64                                                              1.1 MB/s | 2.3 MB     00:02
Fedora 38 - x86_64 - Updates                                                            2.0 MB/s | 6.1 MB     00:03
Fedora Modular 38 - x86_64 - Updates                                                    115  B/s | 257  B     00:02
Dependencies resolved.
========================================================================================================================
 Package              Architecture         Version                                           Repository            Size
========================================================================================================================
Installing:
 figlet               x86_64               2.2.5-25.20151018gita565ae1.fc38                  fedora               137 k

Transaction Summary
========================================================================================================================
Install  1 Package

Total download size: 137 k
Installed size: 666 k
Is this ok [y/N]: y
Downloading Packages:
figlet-2.2.5-25.20151018gita565ae1.fc38.x86_64.rpm                                      950 kB/s | 137 kB     00:00
------------------------------------------------------------------------------------------------------------------------
Total                                                                                   141 kB/s | 137 kB     00:00
Running transaction check
Transaction check succeeded.
Running transaction test
Transaction test succeeded.
Running transaction
  Preparing        :                                                                                                1/1
  Installing       : figlet-2.2.5-25.20151018gita565ae1.fc38.x86_64                                                 1/1
  Running scriptlet: figlet-2.2.5-25.20151018gita565ae1.fc38.x86_64                                                 1/1
  Verifying        : figlet-2.2.5-25.20151018gita565ae1.fc38.x86_64                                                 1/1

Installed:
  figlet-2.2.5-25.20151018gita565ae1.fc38.x86_64

Complete!
[root@80aeb0f8be90 /]# figlet hello world
 _          _ _                            _     _
| |__   ___| | | ___   __      _____  _ __| | __| |
| '_ \ / _ \ | |/ _ \  \ \ /\ / / _ \| '__| |/ _` |
| | | |  __/ | | (_) |  \ V  V / (_) | |  | | (_| |
|_| |_|\___|_|_|\___/    \_/\_/ \___/|_|  |_|\__,_|

[root@80aeb0f8be90 /]# exit
exit

C:\Users\AlvinNg\zero1Wk32>
```
now, shown it stop running in docker Containers

### status
Icon stat
- can check **stat** of app
  - Images >  In_use
  - Containers > Name
  - Stats
Icon restart
-Can restart by clicking at the icon
Icon 3 dots
- Can click at the 3 dots > `Open in terminal`

  eg at Docker Terminal 
  ``` console
  sh-5.2# figlet Hello World!
   _   _      _ _        __        __         _     _ _ 
  | | | | ___| | | ___   \ \      / /__  _ __| | __| | |
  | |_| |/ _ \ | |/ _ \   \ \ /\ / / _ \| '__| |/ _` | |
  |  _  |  __/ | | (_) |   \ V  V / (_) | |  | | (_| |_|
  |_| |_|\___|_|_|\___/     \_/\_/ \___/|_|  |_|\__,_(_)

  sh-5.2# exit
  ```
Do again  
- If use `docker run -i -t fedora` again. Can see that there is different ID.
And we have a third line rnning in the container as well.

### exit
``` console
[root@80aeb0f8be90 /]# exit
exit

C:\Users\AlvinNg\zero1Wk32>docker run -i -t fedora
[root@5a5627010e43 /]# figlet
bash: figlet: command not found
[root@5a5627010e43 /]# exit
```

## Command Line
### docker run -d *jpetazzo/clock*
To run in detach mode. See that the ID also in the container
``` console
C:\Users\AlvinNg\zero1Wk32>docker run -d jpetazzo/clock
57a97c28f1285392d1f4aff22cbd217a487d89a6bea57a58f216e0b88737ddc2
```
### docker --help
``` console
C:\Users\AlvinNg\zero1Wk32>docker --help
...
  logs        Fetch the logs of a container
...
  ps          List containers
...
C:\Users\AlvinNg\zero1Wk32>docker ps
CONTAINER ID   IMAGE                    COMMAND                  CREATED         STATUS         PORTS                NAMES
57a97c28f128   jpetazzo/clock           "/bin/sh -c 'while d…"   9 minutes ago   Up 9 minutes                        blissful_goldberg
d141c13cf50d   docker/getting-started   "/docker-entrypoint.…"   10 hours ago    Up 10 hours    0.0.0.0:80->80/tcp   strange_engelbart

C:\Users\AlvinNg\zero1Wk32>docker run -d jpetazzo/clock
36323e1c2fa7eb0d2b141851bd8516ba08d0f7ba499c2246ec8bc603b40c681b

C:\Users\AlvinNg\zero1Wk32>docker run -d jpetazzo/clock
cea0641ef02540181a7ecb005f08ae5c802f09837f586ae7d32d5802795c6016

C:\Users\AlvinNg\zero1Wk32>docker run -d --name clock jpetazzo/clock
107edfd9800f265d230b90799ec2a220ce7f8c37e662a77190fb7d36f422b8ec

C:\Users\AlvinNg\zero1Wk32>docker ps
CONTAINER ID   IMAGE                    COMMAND                  CREATED              STATUS              PORTS                NAMES
107edfd9800f   jpetazzo/clock           "/bin/sh -c 'while d…"   5 seconds ago        Up 2 seconds                             clock
cea0641ef025   jpetazzo/clock           "/bin/sh -c 'while d…"   About a minute ago   Up About a minute                        loving_sutherland
36323e1c2fa7   jpetazzo/clock           "/bin/sh -c 'while d…"   2 minutes ago        Up 2 minutes                             magical_golick
57a97c28f128   jpetazzo/clock           "/bin/sh -c 'while d…"   13 minutes ago       Up 13 minutes                            blissful_goldberg
d141c13cf50d   docker/getting-started   "/docker-entrypoint.…"   10 hours ago         Up 10 hours         0.0.0.0:80->80/tcp   strange_engelbart
```
### docker stop *57a97c28f128*
### docker kill *clock*
``` console
C:\Users\AlvinNg\zero1Wk32>docker stop 57a97c28f128
57a97c28f128

C:\Users\AlvinNg\zero1Wk32>docker kill clock
clock

C:\Users\AlvinNg\zero1Wk32>docker ps
CONTAINER ID   IMAGE                    COMMAND                  CREATED         STATUS         PORTS                NAMES
cea0641ef025   jpetazzo/clock           "/bin/sh -c 'while d…"   3 minutes ago   Up 3 minutes                        loving_sutherland
36323e1c2fa7   jpetazzo/clock           "/bin/sh -c 'while d…"   4 minutes ago   Up 4 minutes                        magical_golick
d141c13cf50d   docker/getting-started   "/docker-entrypoint.…"   10 hours ago    Up 10 hours    0.0.0.0:80->80/tcp   strange_engelbart
```
### docker logs --help
``` console
C:\Users\AlvinNg\zero1Wk32>docker logs --help

Usage:  docker logs [OPTIONS] CONTAINER

Fetch the logs of a container

Options:
      --details        Show extra details provided to logs
  -f, --follow         Follow log output
      --since string   Show logs since timestamp (e.g.
                       2013-01-02T13:23:37Z) or relative (e.g. 42m for 42
                       minutes)
  -n, --tail string    Number of lines to show from the end of the logs
                       (default "all")
  -t, --timestamps     Show timestamps
      --until string   Show logs before a timestamp (e.g.
                       2013-01-02T13:23:37Z) or relative (e.g. 42m for 42
                       minutes)
```
### docker logs -f --tail *3* *cea0641ef025*
It does't kill in the container. Is good for debugging
``` console
C:\Users\AlvinNg\zero1Wk32>docker logs -f --tail 3 cea0641ef025
Sat Apr 22 16:04:03 UTC 2023
Sat Apr 22 16:04:04 UTC 2023
Sat Apr 22 16:04:05 UTC 2023
Sat Apr 22 16:04:06 UTC 2023
[Ctrl-C]
^C
C:\Users\AlvinNg\zero1Wk32>
```

--- 
