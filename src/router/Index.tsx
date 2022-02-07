import React from "react";
import { Route, Switch } from "react-router-dom";
import { RouteConfig } from '@/types/common'


type RouterProps = {
    routes: Array<RouteConfig>;
}

const RouterView: React.FC<RouterProps> = ({ routes }) => {
    return (
        <Switch>
            {routes.map((item, index) => {
                return (
                    <Route
                        key={index}
                        path={item.path}
                        exact={item.exact}
                        render={(routeProps) => {
                            // 判断是否存在子路由
                            if (item.children) {
                                return <item.component {...routeProps} routes={item.children} />;
                            } else {
                                return <item.component {...routeProps} />;
                            }
                        }}
                    />
                );
            })}
        </Switch>
    );
};
export default RouterView;
