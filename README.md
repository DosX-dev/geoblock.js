# ❌ geoblock.js
This library checks the user's browser language and blocks access if the language matches one of the blocked country codes

## 📄 Adding it to your site
Just add `geoblock.js` via `<script>` and specify which countries you want to restrict access to your web resource.

The example below restricts access to Ukraine (uk) and the United States (us):
```html
<script src="geoblock.js" banned="uk, us" redirect="/block">
```

## Country codes
| Code       | Name                  | Flag        |
|------------|-----------------------|-------------|
| ad         | Andorra               | 🇦🇩         |
| ae         | United Arab Emirates  | 🇦🇪         |
| af         | Afghanistan           | 🇦🇫         |
| ag         | Antigua and Barbuda   | 🇦🇬         |
| ai         | Anguilla              | 🇦🇮         |
| al         | Albania               | 🇦🇱         |
| am         | Armenia               | 🇦🇲         |
| ao         | Angola                | 🇦🇴         |
| aq         | Antarctica            | 🇦🇶         |
| ar         | Argentina             | 🇦🇷         |
| as         | American Samoa        | 🇦🇸         |
| at         | Austria               | 🇦🇹         |
| au         | Australia             | 🇦🇺         |
| aw         | Aruba                 | 🇦🇼         |
| ax         | Åland Islands         | 🇦🇽         |
| az         | Azerbaijan            | 🇦🇿         |
| ba         | Bosnia and Herzegovina| 🇧🇦         |
| bb         | Barbados              | 🇧🇧         |
| bd         | Bangladesh            | 🇧🇩         |
| be         | Belgium               | 🇧🇪         |
| bf         | Burkina Faso          | 🇧🇫         |
| bg         | Bulgaria              | 🇧🇬         |
| bh         | Bahrain               | 🇧🇭         |
| bi         | Burundi               | 🇧🇮         |
| bj         | Benin                 | 🇧🇯         |
| bl         | Saint Barthélemy      | 🇧🇱         |
| bm         | Bermuda               | 🇧🇲         |
| bn         | Brunei                | 🇧🇳         |
| bo         | Bolivia               | 🇧🇴         |
| bq         | Bonaire, Sint Eustatius and Saba| 🇧🇶|
| br         | Brazil                | 🇧🇷         |
| bs         | Bahamas               | 🇧🇸         |
| bt         | Bhutan                | 🇧🇹         |
| bv         | Bouvet Island         | 🇧🇻         |
| bw         | Botswana              | 🇧🇼         |
| by         | Belarus               | 🇧🇾         |
| bz         | Belize                | 🇧🇿         |
| ca         | Canada                | 🇨🇦         |
| cc         | Cocos (Keeling) Islands| 🇨🇨         |
| cd         | Democratic Republic of the Congo| 🇨🇩  |
| cf         | Central African Republic| 🇨🇫         |
| cg         | Republic of the Congo  | 🇨🇬         |
| ch         | Switzerland           | 🇨🇭         |
| ci         | Ivory Coast           | 🇨🇮         |
| ck         | Cook Islands          | 🇨🇰         |
| cl         | Chile                 | 🇨🇱         |
| cm         | Cameroon              | 🇨🇲         |
| cn         | China                 | 🇨🇳         |
| co         | Colombia              | 🇨🇴         |
| cr         | Costa Rica            | 🇨🇷         |
| cu         | Cuba                  | 🇨🇺         |
| cv         | Cape Verde            | 🇨🇻         |
| cw         | Curaçao               | 🇨🇼         |
| cx         | Christmas Island      | 🇨🇽         |
| cy         | Cyprus                | 🇨🇾         |
| cz         | Czech Republic        | 🇨🇿         |
| de         | Germany               | 🇩🇪         |
| dj         | Djibouti              | 🇩🇯         |
| dk         | Denmark               | 🇩🇰         |
| dm         | Dominica              | 🇩🇲         |
| do         | Dominican Republic    | 🇩🇴         |
| dz         | Algeria               | 🇩🇿         |
| ec         | Ecuador               | 🇪🇨         |
| ee         | Estonia               | 🇪🇪         |
| eg         | Egypt                 | 🇪🇬         |
| eh         | Western Sahara        | 🇪🇭         |
| er         | Eritrea               | 🇪🇷         |
| es         | Spain                 | 🇪🇸         |
| et         | Ethiopia              | 🇪🇹         |
| fi         | Finland               | 🇫🇮         |
| fj         | Fiji                  | 🇫🇯         |
| fk         | Falkland Islands      | 🇫🇰         |
| fm         | Federated States of Micronesia| 🇫🇲  |
| fo         | Faroe Islands         | 🇫🇴         |
| fr         | France                | 🇫🇷         |
| ga         | Gabon                 | 🇬🇦         |
| gb         | United Kingdom        | 🇬🇧         |
| gd         | Grenada               | 🇬🇩         |
| ge         | Georgia               | 🇬🇪         |
| gf         | French Guiana         | 🇬🇫         |
| gg         | Guernsey              | 🇬🇬         |
| gh         | Ghana                 | 🇬🇭         |
| gi         | Gibraltar             | 🇬🇮         |
| gl         | Greenland             | 🇬🇱         |
| gm         | Gambia                | 🇬🇲         |
| gn         | Guinea                | 🇬🇳         |
| gp         | Guadeloupe            | 🇬🇵         |
| gq         | Equatorial Guinea     | 🇬🇶         |
| gr         | Greece                | 🇬🇷         |
| gs         | South Georgia and the South Sandwich Islands| 🇬🇸|
| gt         | Guatemala             | 🇬🇹         |
| gu         | Guam                  | 🇬🇺         |
| gw         | Guinea-Bissau         | 🇬🇼         |
| gy         | Guyana                | 🇬🇾         |
| hk         | Hong Kong             | 🇭🇰         |
| hm         | Heard Island and McDonald Islands| 🇭🇲  |
| hn         | Honduras              | 🇭🇳         |
| hr         | Croatia               | 🇭🇷         |
| ht         | Haiti                 | 🇭🇹         |
| hu         | Hungary               | 🇭🇺         |
| id         | Indonesia             | 🇮🇩         |
| ie         | Ireland               | 🇮🇪         |
| il         | Israel                | 🇮🇱         |
| im         | Isle of Man           | 🇮🇲         |
| in         | India                 | 🇮🇳         |
| io         | British Indian Ocean Territory| 🇮🇴   |
| iq         | Iraq                  | 🇮🇶         |
| ir         | Iran                  | 🇮🇷         |
| is         | Iceland               | 🇮🇸         |
| it         | Italy                 | 🇮🇹         |
| je         | Jersey                | 🇯🇪         |
| jm         | Jamaica               | 🇯🇲         |
| jo         | Jordan                | 🇯🇴         |
| jp         | Japan                 | 🇯🇵         |
| ke         | Kenya                 | 🇰🇪         |
| kg         | Kyrgyzstan            | 🇰🇬         |
| kh         | Cambodia              | 🇰🇭         |
| ki         | Kiribati              | 🇰🇮         |
| km         | Comoros               | 🇰🇲         |
| kn         | Saint Kitts and Nevis | 🇰🇳         |
| kp         | North Korea           | 🇰🇵         |
| kr         | South Korea           | 🇰🇷         |
| kw         | Kuwait                | 🇰🇼         |
| ky         | Cayman Islands        | 🇰🇾         |
| kz         | Kazakhstan            | 🇰🇿         |
| la         | Laos                  | 🇱🇦         |
| lb         | Lebanon               | 🇱🇧         |
| lc         | Saint Lucia           | 🇱🇨         |
| li         | Liechtenstein         | 🇱🇮         |
| lk         | Sri Lanka             | 🇱🇰         |
| lr         | Liberia               | 🇱🇷         |
| ls         | Lesotho               | 🇱🇸         |
| lt         | Lithuania             | 🇱🇹         |
| lu         | Luxembourg            | 🇱🇺         |
| lv         | Latvia                | 🇱🇻         |
| ly         | Libya                 | 🇱🇾         |
| ma         | Morocco               | 🇲🇦         |
| mc         | Monaco                | 🇲🇨         |
| md         | Moldova               | 🇲🇩         |
| me         | Montenegro            | 🇲🇪         |
| mf         | Saint Martin          | 🇲🇫         |
| mg         | Madagascar            | 🇲🇬         |
| mh         | Marshall Islands      | 🇲🇭         |
| mk         | North Macedonia      | 🇲🇰         |
| ml         | Mali                  | 🇲🇱         |
| mm         | Myanmar               | 🇲🇲         |
| mn         | Mongolia              | 🇲🇳         |
| mo         | Macau                 | 🇲🇴         |
| mp         | Northern Mariana Islands| 🇲🇵       |
| mq         | Martinique            | 🇲🇶         |
| mr         | Mauritania            | 🇲🇷         |
| ms         | Montserrat            | 🇲🇸         |
| mt         | Malta                 | 🇲🇹         |
| mu         | Mauritius             | 🇲🇺         |
| mv         | Maldives              | 🇲🇻         |
| mw         | Malawi                | 🇲🇼         |
| mx         | Mexico                | 🇲🇽         |
| my         | Malaysia              | 🇲🇾         |
| mz         | Mozambique            | 🇲🇿         |
| na         | Namibia               | 🇳🇦         |
| nc         | New Caledonia         | 🇳🇨         |
| ne         | Niger                 | 🇳🇪         |
| nf         | Norfolk Island        | 🇳🇫         |
| ng         | Nigeria               | 🇳🇬         |
| ni         | Nicaragua             | 🇳🇮         |
| nl         | Netherlands           | 🇳🇱         |
| no         | Norway                | 🇳🇴         |
| np         | Nepal                 | 🇳🇵         |
| nr         | Nauru                 | 🇳🇷         |
| nu         | Niue                  | 🇳🇺         |
| nz         | New Zealand           | 🇳🇿         |
| om         | Oman                  | 🇴🇲         |
| pa         | Panama                | 🇵🇦         |
| pe         | Peru                  | 🇵🇪         |
| pf         | French Polynesia      | 🇵🇫         |
| pg         | Papua New Guinea      | 🇵🇬         |
| ph         | Philippines           | 🇵🇭         |
| pk         | Pakistan              | 🇵🇰         |
| pl         | Poland                | 🇵🇱         |
| pm         | Saint Pierre and Miquelon| 🇵🇲       |
| pn         | Pitcairn Islands      | 🇵🇳         |
| pr         | Puerto Rico           | 🇵🇷         |
| ps         | Palestinian Territories| 🇵🇸        |
| pt         | Portugal              | 🇵🇹         |
| pw         | Palau                 | 🇵🇼         |
| py         | Paraguay              | 🇵🇾         |
| qa         | Qatar                 | 🇶🇦         |
| re         | Réunion               | 🇷🇪         |
| ro         | Romania               | 🇷🇴         |
| rs         | Serbia                | 🇷🇸         |
| ru         | Russia                | 🇷🇺         |
| rw         | Rwanda                | 🇷🇼         |
| sa         | Saudi Arabia          | 🇸🇦         |
| sb         | Solomon Islands       | 🇸🇧         |
| sc         | Seychelles            | 🇸🇨         |
| sd         | Sudan                 | 🇸🇩         |
| se         | Sweden                | 🇸🇪         |
| sg         | Singapore             | 🇸🇬         |
| sh         | Saint Helena          | 🇸🇭         |
| si         | Slovenia              | 🇸🇮         |
| sj         | Svalbard and Jan Mayen| 🇸🇯         |
| sk         | Slovakia              | 🇸🇰         |
| sl         | Sierra Leone          | 🇸🇱         |
| sm         | San Marino            | 🇸🇲         |
| sn         | Senegal               | 🇸🇳         |
| so         | Somalia               | 🇸🇴         |
| sr         | Suriname              | 🇸🇷         |
| ss         | South Sudan           | 🇸🇸         |
| st         | Sao Tome and Principe | 🇸🇹         |
| sv         | El Salvador           | 🇸🇻         |
| sx         | Sint Maarten          | 🇸🇽         |
| sy         | Syria                 | 🇸🇾         |
| sz         | Eswatini              | 🇸🇿         |
| tc         | Turks and Caicos Islands| 🇹🇨       |
| td         | Chad                  | 🇹🇩         |
| tf         | French Southern Territories| 🇹🇫       |
| tg         | Togo                  | 🇹🇬         |
| th         | Thailand              | 🇹🇭         |
| tj         | Tajikistan            | 🇹🇯         |
| tk         | Tokelau               | 🇹🇰         |
| tl         | Timor-Leste           | 🇹🇱         |
| tm         | Turkmenistan          | 🇹🇲         |
| tn         | Tunisia               | 🇹🇳         |
| to         | Tonga                 | 🇹🇴         |
| tr         | Turkey                | 🇹🇷         |
| tt         | Trinidad and Tobago   | 🇹🇹         |
| tv         | Tuvalu                | 🇹🇻         |
| tw         | Taiwan                | 🇹🇼         |
| tz         | Tanzania              | 🇹🇿         |
| ua         | Ukraine               | 🇺🇦         |
| ug         | Uganda                | 🇺🇬         |
| um         | United States Minor Outlying Islands| 🇺🇲|
| us         | United States         | 🇺🇸         |
| uy         | Uruguay               | 🇺🇾         |
| uz         | Uzbekistan            | 🇺🇿         |
| va         | Vatican City          | 🇻🇦         |
| vc         | Saint Vincent and the Grenadines| 🇻🇨  |
| ve         | Venezuela             | 🇻🇪         |
| vg         | British Virgin Islands| 🇻🇬         |
| vi         | United States Virgin Islands| 🇻🇮     |
| vn         | Vietnam               | 🇻🇳         |
| vu         | Vanuatu               | 🇻🇺         |
| wf         | Wallis and Futuna     | 🇼🇫         |
| ws         | Samoa                 | 🇼🇸         |
| ye         | Yemen                 | 🇾🇪         |
| yt         | Mayotte               | 🇾🇹         |
| za         | South Africa          | 🇿🇦         |
| zm         | Zambia                | 🇿🇲         |
| zw         | Zimbabwe              | 🇿🇼         |

