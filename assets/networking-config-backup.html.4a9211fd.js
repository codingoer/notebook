import{d as n}from"./app.df89ce13.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="\u7F51\u7EDC\u914D\u7F6E\u6587\u4EF6\u5907\u4EFD" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7EDC\u914D\u7F6E\u6587\u4EF6\u5907\u4EFD" aria-hidden="true">#</a> \u7F51\u7EDC\u914D\u7F6E\u6587\u4EF6\u5907\u4EFD</h1><p>\u914D\u7F6E\u6587\u4EF6\u5728 <strong>/Library/Preferences/VMware Fusion</strong> \u76EE\u5F55\u4E0B</p><h2 id="networking\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#networking\u6587\u4EF6" aria-hidden="true">#</a> networking\u6587\u4EF6</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>VERSION=1<span class="token punctuation">,</span><span class="token number">0</span>
answer VNET_1_DHCP yes
answer VNET_1_DHCP_CFG_HASH F5DBF6E6100533977865FBFD91F626D8BC989FE8
answer VNET_1_HOSTONLY_NETMASK 255.255.255.0
answer VNET_1_HOSTONLY_SUBNET 192.168.171.0
answer VNET_1_VIRTUAL_ADAPTER yes
answer VNET_8_DHCP yes
answer VNET_8_DHCP_CFG_HASH 15DA9EEAFA7B866650C685E3BA75D31A2584B849
answer VNET_8_HOSTONLY_NETMASK 255.255.255.0
answer VNET_8_HOSTONLY_SUBNET 192.168.168.0
answer VNET_8_NAT yes
answer VNET_8_VIRTUAL_ADAPTER yes
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="vmnet8\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#vmnet8\u76EE\u5F55" aria-hidden="true">#</a> vmnet8\u76EE\u5F55</h2><h3 id="dhcp-conf\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#dhcp-conf\u6587\u4EF6" aria-hidden="true">#</a> dhcp.conf\u6587\u4EF6</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># Configuration file for ISC 2.0 vmnet-dhcpd operating on vmnet8.</span>
<span class="token comment"># </span>
<span class="token comment"># This file was automatically generated by the VMware configuration program.</span>
<span class="token comment"># See Instructions below if you want to modify it.</span>
<span class="token comment">#</span>
<span class="token comment"># We set domain-name-servers to make some DHCP clients happy</span>
<span class="token comment"># (dhclient as configured in SuSE, TurboLinux, etc.).</span>
<span class="token comment"># We also supply a domain name to make pump (Red Hat 6.x) happy.</span>
<span class="token comment">#</span>


<span class="token comment">###### VMNET DHCP Configuration. Start of &quot;DO NOT MODIFY SECTION&quot; #####</span>
<span class="token comment"># Modification Instructions: This section of the configuration file contains</span>
<span class="token comment"># information generated by the configuration program. Do not modify this</span>
<span class="token comment"># section.</span>
<span class="token comment"># You are free to modify everything else. Also, this section must start</span>
<span class="token comment"># on a new line</span>
<span class="token comment"># This file will get backed up with a different name in the same directory</span>
<span class="token comment"># if this section is edited and you try to configure DHCP again.</span>

<span class="token comment"># Written at: 05/16/2020 21:37:27</span>
allow unknown<span class="token punctuation">-</span>clients;
default<span class="token punctuation">-</span>lease<span class="token punctuation">-</span>time 1800;                <span class="token comment"># default is 30 minutes</span>
max<span class="token punctuation">-</span>lease<span class="token punctuation">-</span>time 7200;                    <span class="token comment"># default is 2 hours</span>

subnet 192.168.168.0 netmask 255.255.255.0 <span class="token punctuation">{</span>
        range 192.168.168.128 192.168.168.254;
        option broadcast<span class="token punctuation">-</span>address 192.168.168.255;
        option domain<span class="token punctuation">-</span>name<span class="token punctuation">-</span>servers 192.168.168.2;
        option domain<span class="token punctuation">-</span>name localdomain;
        default<span class="token punctuation">-</span>lease<span class="token punctuation">-</span>time 1800;                <span class="token comment"># default is 30 minutes</span>
        max<span class="token punctuation">-</span>lease<span class="token punctuation">-</span>time 7200;                    <span class="token comment"># default is 2 hours</span>
        option netbios<span class="token punctuation">-</span>name<span class="token punctuation">-</span>servers 192.168.168.2;
        option routers 192.168.168.2;
<span class="token punctuation">}</span>
host vmnet8 <span class="token punctuation">{</span>
        hardware ethernet 00<span class="token punctuation">:</span>50<span class="token punctuation">:</span>56<span class="token punctuation">:</span>C0<span class="token punctuation">:</span>00<span class="token punctuation">:</span>08;
        fixed<span class="token punctuation">-</span>address 192.168.168.1;
        option domain<span class="token punctuation">-</span>name<span class="token punctuation">-</span>servers 0.0.0.0;
        option domain<span class="token punctuation">-</span>name &quot;&quot;;
        option routers 0.0.0.0;
<span class="token punctuation">}</span>
<span class="token comment">####### VMNET DHCP Configuration. End of &quot;DO NOT MODIFY SECTION&quot; #######</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><h3 id="nat-conf\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#nat-conf\u6587\u4EF6" aria-hidden="true">#</a> nat.conf\u6587\u4EF6</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># VMware NAT configuration file</span>
<span class="token comment"># Manual editing of this file is not recommended. Using UI is preferred.</span>

<span class="token punctuation">[</span>host<span class="token punctuation">]</span>

<span class="token comment"># NAT gateway address</span>
ip = 192.168.168.2
netmask = 255.255.255.0

<span class="token comment"># VMnet device if not specified on command line</span>
device = vmnet8

<span class="token comment"># Allow PORT/EPRT FTP commands (they need incoming TCP stream ...)</span>
activeFTP = 1

<span class="token comment"># Allows the source to have any OUI.  Turn this on if you change the OUI</span>
<span class="token comment"># in the MAC address of your virtual machines.</span>
allowAnyOUI = 1

<span class="token comment"># Controls if (TCP) connections should be reset when the adapter they are</span>
<span class="token comment"># bound to goes down</span>
resetConnectionOnLinkDown = 1

<span class="token comment"># Controls if (TCP) connection should be reset when guest packet&#39;s destination</span>
<span class="token comment"># is NAT&#39;s IP address</span>
resetConnectionOnDestLocalHost = 1

<span class="token comment"># Controls if enable nat ipv6</span>
natIp6Enable = 0

<span class="token comment"># Controls if enable nat ipv6</span>
natIp6Prefix = fd15<span class="token punctuation">:</span>4ba5<span class="token punctuation">:</span>5a2b<span class="token punctuation">:</span>1008<span class="token punctuation">:</span><span class="token punctuation">:</span>/64

<span class="token punctuation">[</span>tcp<span class="token punctuation">]</span>

<span class="token comment"># Value of timeout in TCP TIME_WAIT state, in seconds</span>
timeWaitTimeout = 30

<span class="token punctuation">[</span>udp<span class="token punctuation">]</span>

<span class="token comment"># Timeout in seconds. Dynamically-created UDP mappings will purged if</span>
<span class="token comment"># idle for this duration of time 0 = no timeout, default = 60; real</span>
<span class="token comment"># value might be up to 100% longer</span>
timeout = 60

<span class="token punctuation">[</span>netbios<span class="token punctuation">]</span>
<span class="token comment"># Timeout for NBNS queries.</span>
nbnsTimeout = 2

<span class="token comment"># Number of retries for each NBNS query.</span>
nbnsRetries = 3

<span class="token comment"># Timeout for NBDS queries.</span>
nbdsTimeout = 3

<span class="token punctuation">[</span>incomingtcp<span class="token punctuation">]</span>

<span class="token comment"># Use these with care - anyone can enter into your VM through these...</span>
<span class="token comment"># The format and example are as follows:</span>
<span class="token comment">#&lt;external port number&gt; = &lt;VM&#39;s IP address&gt;:&lt;VM&#39;s port number&gt;</span>
<span class="token comment">#8080 = 172.16.3.128:80</span>

<span class="token punctuation">[</span>incomingudp<span class="token punctuation">]</span>

<span class="token comment"># UDP port forwarding example</span>
<span class="token comment">#6000 = 172.16.3.0:6001</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br></div></div><h3 id="nat-mac\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#nat-mac\u6587\u4EF6" aria-hidden="true">#</a> nat.mac\u6587\u4EF6</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>00<span class="token punctuation">:</span>50<span class="token punctuation">:</span>56<span class="token punctuation">:</span>FF<span class="token punctuation">:</span>FB<span class="token punctuation">:</span>A3
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="vmnet1\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#vmnet1\u76EE\u5F55" aria-hidden="true">#</a> vmnet1\u76EE\u5F55</h2><h3 id="dhcp-conf\u6587\u4EF6-1" tabindex="-1"><a class="header-anchor" href="#dhcp-conf\u6587\u4EF6-1" aria-hidden="true">#</a> dhcp.conf\u6587\u4EF6</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># Configuration file for ISC 2.0 vmnet-dhcpd operating on vmnet1.</span>
<span class="token comment">#</span>
<span class="token comment"># This file was automatically generated by the VMware configuration program.</span>
<span class="token comment"># See Instructions below if you want to modify it.</span>
<span class="token comment">#</span>
<span class="token comment"># We set domain-name-servers to make some DHCP clients happy</span>
<span class="token comment"># (dhclient as configured in SuSE, TurboLinux, etc.).</span>
<span class="token comment"># We also supply a domain name to make pump (Red Hat 6.x) happy.</span>
<span class="token comment">#</span>


<span class="token comment">###### VMNET DHCP Configuration. Start of &quot;DO NOT MODIFY SECTION&quot; #####</span>
<span class="token comment"># Modification Instructions: This section of the configuration file contains</span>
<span class="token comment"># information generated by the configuration program. Do not modify this</span>
<span class="token comment"># section.</span>
<span class="token comment"># You are free to modify everything else. Also, this section must start </span>
<span class="token comment"># on a new line </span>
<span class="token comment"># This file will get backed up with a different name in the same directory </span>
<span class="token comment"># if this section is edited and you try to configure DHCP again.</span>

<span class="token comment"># Written at: 05/16/2020 21:37:27</span>
allow unknown<span class="token punctuation">-</span>clients;
default<span class="token punctuation">-</span>lease<span class="token punctuation">-</span>time 1800;                <span class="token comment"># default is 30 minutes</span>
max<span class="token punctuation">-</span>lease<span class="token punctuation">-</span>time 7200;                    <span class="token comment"># default is 2 hours</span>

subnet 192.168.171.0 netmask 255.255.255.0 <span class="token punctuation">{</span>
	range 192.168.171.128 192.168.171.254;
	option broadcast<span class="token punctuation">-</span>address 192.168.171.255;
	option domain<span class="token punctuation">-</span>name<span class="token punctuation">-</span>servers 192.168.171.1;
	option domain<span class="token punctuation">-</span>name localdomain;
	default<span class="token punctuation">-</span>lease<span class="token punctuation">-</span>time 1800;                <span class="token comment"># default is 30 minutes</span>
	max<span class="token punctuation">-</span>lease<span class="token punctuation">-</span>time 7200;                    <span class="token comment"># default is 2 hours</span>
<span class="token punctuation">}</span>
host vmnet1 <span class="token punctuation">{</span>
	hardware ethernet 00<span class="token punctuation">:</span>50<span class="token punctuation">:</span>56<span class="token punctuation">:</span>C0<span class="token punctuation">:</span>00<span class="token punctuation">:</span>01;
	fixed<span class="token punctuation">-</span>address 192.168.171.1;
	option domain<span class="token punctuation">-</span>name<span class="token punctuation">-</span>servers 0.0.0.0;
	option domain<span class="token punctuation">-</span>name &quot;&quot;;
<span class="token punctuation">}</span>
<span class="token comment">####### VMNET DHCP Configuration. End of &quot;DO NOT MODIFY SECTION&quot; #######</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div>`,14);function p(t,l){return e}var r=s(a,[["render",p],["__file","networking-config-backup.html.vue"]]);export{r as default};
