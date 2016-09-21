 <div class="header" data-ng-app="fdsApp">
                <h1 class="brand_logo"><a href="">intermusica</a></h1>
                <div class="header-right">
                    <span class="page_indicator">Home</span>
                    <button type="button" class="nav_btn">nav button</button>
                    <nav>
                        <h2>main navigation bar</h2>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Artists</a></li>
                            <li><a href="">News</a></li>
                            <li><a href="">International Tours</a></li>
                            <li><a href="">Film &amp; Multimedia</a></li>
                            <li><a href="">Dance</a></li>
                            <li><a href="">What we do</a></li>
                        </ul>
                    </nav>
                    <button type="button" class="search_btn">search button</button>
                    <div class="search fds-members" data-ng-controller="fdsMemberListController as fdsCtrl">
                        <input type="search" name="search" placeholder="Search" data-ng-model="search.name">
                        <button type="button">send</button>
                        <!--  <pre>{{search | json}}</pre> -->
                        <ul class="member-list">
                            <li data-ng-repeat="(index, member) in fdsCtrl.members | filter:search">
                                <div class="member-index">{{ index }}</div>
                                <div>
                                    <ul>
                                        <li>{{member.name}}</li>
                                        <li>{{member.regiment}}</li>
                                        <li>{{member.devil_fruit}}</li>
                                        <li>{{member.position}}</li>
                                        <li>{{member.wanted}}</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <!--  <pre>{{ fdsCtrl.members | json }}</pre> -->
                    </div>
                </div>
            </div>