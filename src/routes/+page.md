<svelte:head>
	<title>AREGA (Avery's Reference for Esports and GGLeap Administration)</title>
	<meta name="description" content="The in and outs to running the SNHU Esports Arena." />
</svelte:head>

<div class="intro-meta"><span>LAST UPDATED SEPTEMBER 2026</span></div>

# <em>A</em>very's<br/> <em>R</em>eference for <br/><em>E</em>sports and <br/><em>G</em>GLeap <br/><em>A</em>dministration

Everything you need to know to run the SNHU Esports Arena, from setting up PC's to managing GGLeap and the Arena's Discord server. Created by avery 'averwhy' bertrand, a former arena tech and student operations manager for 4 years, 2022-2026.

> Pro tip: Use `Ctrl` + `F` to search for a specific areas or topics

> [!IMPORTANT]
> This is a work in progress, and will be updated as I remember more things that are important to know about running the arena. If you have any questions or want anything added, please feel free to drop a ping to `@averwhy` in #operations in the Discord server.

## Table of Contents
- [Daily Operations](#daily-operations)
- [PC Management](#pc-management)
- [GGLeap Management](#ggleap-management)
- [Misc Arena Technologies](#misc-arena-technologies)

## Daily Operations

### Opening
I noticed in my time as a tech that there were a few steps that were missed when it came to opening the arena. So after you finish turning on all the PC's, make sure to also do the following:

1. Head over to the Mac laptop in the streaming booth and unlock it. The password is to the right of the trackpad. You should see the ADJ myDMX software open (if not, open it with Cmd+Space, and type myDMX). You should then select the 'Caster' lighting profile. This will turn on the overhead lights to blue. **I consider this a essential step of opening the arena**, as it makes the arena look more professional and welcoming to players.
2. Turn on the 'gobo' projecter behind the casters desk. The remote is a white remote with 'A' and 'B' buttons. 'A' turns it on and off. This is another essential step that adds to the professionalism of the arena.
3. Remember to always turn on the Brightsign TV's in front of the front row of PC's. The remote for this has a blue on button and red off button, with 'NEC' labeled at the bottom.
3. Lastly, when putting on a stream on the TV's, I'd look for any professional esports streams that are live on Twitch. You can play lo-fi music in the background with the stream muted, or you can just play the stream with sound.

### Check In's
When students come into the arena, greet them warmly, and ensure they place their student ID in the card holder. If they are a first time visitor, welcome them, and let them know that the PC's in the Esports Arena use an 'internet-cafe' style computer management system called GGLeap. This means you'll have to create an account for them which they'll then use to log in to the PC's. Once their account is created, make sure to add time to their account (I typically throw ~10-20 hours on there).

#### Forgotten ID's
While not extremely common, there are times when students forget their ID's, sometimes after close. If this happens, shoot them a courtesy email to let them know they left their ID. I'll sign off the email with my job title to make it more official.

### Closing
You're basically just opening in reverse order here. 15 minutes before closing, make sure to inform the non-varsity students that the arena will be closing soon. In the event that someones game runs past the closing time, I was always okay to let them finish. Make sure the PC's are off, TV's off, streaming PC off, and the overhead colored lights off.

Usually however, if you know there are going to be varsity matches that night, you can leave the streaming PC on, as well as the overhead lights and Brightsign TV's. Regardless, **always close the door**.

## PC Management
This section covers everything from setting up new PC's, to troubleshooting common issues, update assurance, and more.

### Installing Software / Software List
This is a list of all the software that should be installed on each PC in the arena. Note that sometimes you guys can change what games are enabled on the PC's, so this list is sort of a 'bare minimum' list.

| Software Name  | Vendor/Installer | Notes |
|-------|------|------|
| Google Chrome | Google | |
| Steam | Valve Corporation | |
| Epic Games Launcher | Epic Games | | 
| Battle.net | Blizzard Entertainment | |
| Valorant | Riot Games | This also installs the Riot Launcher |
| League of Legends | Riot Games (Riot Client) | |
| Rocket League | Psyonix (Epic Games Launcher) | |
| Overwatch 2 | Blizzard Entertainment (Battle.net launcher) | |
| Minecraft Launcher | Mojang | |
| Modrinth | Modrinth | This is the better version of CurseForge, it should be enabled on GGLeap |
| Spotify | Spotify | |
| Metal TV | Metal BV | |
| Streamlabs | Streamlabs | |
| Razer Synapse | Razer | |
| NDI Tools | NewTek | |
| Logitech G Hub | Logitech | |
| Nvidia GeForce Experience | Nvidia | Should come preinstalled, install if not |
| WizTree | Antibody Software | Utility tool to vizualize disk space usage, not enabled on GGLeap | |
| GGLeap | GGLeap Dashboard | This is the last thing you should install, it will restart the PC after installation. You can get it from the GGLeap Dashboard -> Settings -> Client Configuration -> Download Installer |


### Troubleshooting
There are a whole host of issues that have arisen over the years. For some reason these PC's just being used every day causes issues to arise. On the bright side, you can learn a lot from these issues. 

According to the golden rule of IT, always start with the simplest fix first. This means restart the PC, check the cables, check the power, etc. If not, see some common issues below...

Always check if the graphics drivers are up to date. You can do this by opening the Nvidia GeForce Experience software, and checking for updates. If there is an update, install it, and restart the PC. This can fix a lot of game launch/crash issues.

> [!TIP]
> Shoot avery a dm on discord (`@averwhy`) if you want an issue added here.

#### Sound not working
Always check the headphone cable volume adjuster first. If not that, in the top right when logged into GGLeap, click where the username is displayed, then select `PC Settings`. Open sound devices and confirm that the right one is enabled. Then check the `Volume Mixer` to ensure it's not muted. If neither of these fix it, check the game/app settings to make sure it's outputting audio to the right place. Sometimes if a PS5 controller is connected, it will snag the audio output, so you'll have to reselect the headphones.

#### Steam game stuck on 'Running install scripts'
Cancel the launch of the game, and open Big Picture Mode (top right of the Steam window). Launch the game again and it should go.

### PC Resetting
Sometimes, some weird issue persists through updating GPU drivers, resinstalling the game and a whole host of other fixes. Reintalling windows can be the the last resort to fix the issue.

My preferred method is it use the Windows Recovery Environment/Advanced Startup Options menu. The process is as follows:
1. Confirm nothing is on the PC that needs to be saved. Check things like Minecraft world saves, Modrinth profiles, and any other files that may be on the desktop or in the documents folder. If there is anything that needs to be saved, copy it to a USB drive.
2. Open the start menu and click the power button. Hold down the `Shift` key and click `Restart`. This will bring you to the Windows Recovery Environment.
3. Select `Troubleshoot` -> `Reset this PC` -> `Remove everything`.
4. The reinstall should kick off, and it takes anywhere from 20-40 minutes to complete. Once it is done, refer to the [PC Setup](#pc-setup) section to reinstall all the software and games, as well as GGLeap.

### PC Setup
When setting up a new or newly reset PC, it will run you through some prompts to setup Windows (e.g. username, microsoft account, etc.).

> [!IMPORTANT]
> *ALWAYS* use the same username and password for all the PC's in the arena. This is important for GGLeap to work properly, since it looks for games in specific directories. The username that should always be used is `GGLeap`, and ask a fellow tech or Tim if you don't know what the password is.

Once you get to a screen where Microsoft asks you to login, we're going to bypass it. Apparently there is a newer trick where if you click `Learn More` inside the text paragraph, it will allow you to create a local account instead.

If not, we have to modify a specific registry value. There was a shortcut command to do this (`oobe/bypassnro`), but it seems to have been removed by microsoft in recent Win11 versions. Instead, press `Shift` + `F10` to open the command prompt, and paste the following command:
```
reg add HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\OOBE /v BypassNRO /t REG_DWORD /d 1 /f && shutdown /r /t 0
```

If for some reason that doesn't work, try this while connected to the ethernet:
```
start ms-cxh:localonly
```

Chances are one of these will work. 

The rest of this process entails installing all of the software listed in the [Installing Software / Software List](#installing-software--software-list) section. Once that is done, you can install the other games that are enabled on GGLeap. 

> [!NOTE]
> The windows key is disabled by GGLeap after install.

Lastly, install GGLeap. After it restarts with the GGLeap screen, you'll need to go into Admin mode (please tell me you know how to do this), and enable auto log-on. Of course, as is the case with everything Microsoft and Win11, they hide the setting. Here's the bypass: 
1. Search for `Run`, and open it
2. Type `regedit` and hit enter
3. You should see a 'path'/text box at the top, you'll want to enter this path: ```HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\PasswordLess\Device```
4. Look for an entry named `DevicePasswordLessBuildVersion`. Double click it, and change the value data from `2` to `0`.
5. Close and restart.
6. Upon restart, enter admin mode again. Modifying that registry editor value has made the setting reappear now. Open `Run` again.
7. Type `netplwiz` and press enter. The Advanced User Accounts Control Panel should open.
8. Click on GGLeap, and there should be a checkbox labeled 'Users must enter a user name and password to use this computer.' Uncheck that.
9. Click Apply, and a prompt should appear asking for credentials. Enter the GGLeap user account password (not your GGLeap admin pw).
10. Click Ok to close that window, and restart again. Tada!

I noticed that with the new Lenovo PC's, they sometimes came with Norton. Long story short, it's a awful antivirus software that isn't needed and absolutely should be uninstalled. The best way to do this is open Windows Settings, search for 'Add and Remove' Programs. Search for Norton and uninstall every entry there. **Be careful navigating through the uninstall prompts, as it tries to trick you to stay installed. You want everything removed.** (Note that if you're setting up a reset PC, it's most likely not installed, as it's a fresh copy of Windows.)

## GGLeap Management

### Adding/Removing Games
In GGLeap, navigate to Settings -> Client Configuration -> Games/Apps. Here you can add or remove games and other softwares (such as Discord) from the GGLeap client. If you want to add a game, search for it and enable it.

> [!IMPORTANT]
>Enabling a game does *not* install it on the PC's. It just enables it to show up in the frontend GGLeap client, *IF installed on the PC.*

If you enable a game and install it on the PC, then restart and notice that it doesn't show up, double check where the game was installed, and cross reference that with the game's settings in GGLeap. If they're not the same, change the game's settings in GGLeap to match where the game is installed on the PC. 

### Updating GGLeap
Sometimes when you open the GGLeap dashboard, you'll see a notification that there is an update available. If this happens, click on it to bring you to the list of PC's with their GGLeap versions. You can select all the boxes and click 'Update Selected'. This will update GGLeap on all the PC's in the arena. Note that (unless they change it for some reason), this is safe to do while the PC's are in use. The update will be applied the next time the PC is restarted.

### User management
You should (and probably do) already know how to create users in GGLeap. This will cover some additional user management functionalities thats are useful from time to time.

#### Resetting passwords
If someone hasn't visited the arena in a while and forgot their password, you can reset it by viewing their profile, clicking `Edit Details` and have them set a new password.

#### Removing Time
If you need to remove time from someone, view their profile, and delete all the blocks of time from the `GamePasses` section.

In the event that a student breaks a rule and needs to be talked to, you can prevent them from logging in by removing all of their hours (obviously), but also add a note to their account. This note will be visible to all techs when they log in, and can be used to inform them of the situation. To add a note, search for the user, and click 'View Profile'. You'll see a 'Notes & Reminders' section on the right with an `+ Add Note` button. Click that, and be sure to set it to 'Critical'. This will require everyone who views the profile or goes to add time to acknowledge the note first.

## Misc Arena Technologies

### Lighting
The most important lighting (other than the main lights obviously) in the arena is the overhead lights. These are controlled by a Mac laptop in the streaming booth, and the software used to control them is called ADJ myDMX. To login to the Mac, refer to the username and password that are to the right of the trackpad. Once logged in, you should see the ADJ myDMX software open. If not, open it with Cmd+Space, and type myDMX.

To turn the lights *on*, select the 'Caster' lighting profile. It should be selected when opening the arena. This will turn on the overhead lights to blue.

If you want to turn the lights *off*, you can select the 'Blackout' lighting profile.

> [!TIP]
> There are some other profiles such as a halloween and christmas profile. If you know a little bit about lighting, you can also create your own lighting profiles.

### The server PC
The server PC is an MSI Trident desktop sitting on the right when you enter the streaming booth. It has a minecraft server set up on it, but was not running when I left. If you want to run the Minecraft server, shoot me a dm on Discord (`@averwhy`) and I can give you the run through as well as the PC's credentials. That PC is running Windows Server 2025. You can do basically anything with it too if you're interested.


<div class="closing-note" id="community">
	<span>wtf krenik <br/><br/>view the source for this site at <a href="https://github.com/averwhy/AREGA">github.com/averwhy/AREGA</a><br/>made with ❤️ (and sveltekit)</span>
</div>