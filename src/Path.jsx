import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";


// Day 1
// import BackgroundChanger from "./Day 1/BackgroundChanger";
import BackGroundChanger from "./Day1/BackGroundChanger";

// Day 2
import Array from "./Day 2/Array";
import Calculator from "./Day 2/calculator";
import Condition from "./Day 2/condition";
import Multiplication from "./Day 2/multiplication";
import Variable from "./Day 2/Variable";

// Day 3
import GradeEvaluator from "./Day 3/GradeEvaluator";
import Merge from "./Day 3/merge";
import UserList from "./Day 3/userlist";
import ShowObject from "./Day 3/object";

// Day 4
import Users from "./Day 4/Users";
import EmojiPicker from "./Day 4/emojipicker";

// Day 5
// LiftingState import removed (file not found in structure)
import LoginForm from "./Day 5/loginform";
import FocusInput from "./Day 5/Focusinput";
import Parent from "./Day 5/LiftingState";

// Day 6
import Home from "./Day 6/Home";
import ViewUser from "./Day 6/ViewUser";

// Day 8
import Todo from "./Day 8/Todo";

import PageNotFound from "./PageNotFound";

// Day 9
import CompleteForm from "./Day 9/CompleteForm";




export default function Path() {
	return (
		<Routes>
			<Route path="*" element={<PageNotFound />} />
			<Route path="/" element={<Layout />}>

				{/* Day 1 Routes */}
				<Route path="/day1/BackgroundChanger" element={<BackGroundChanger />} />

				{/* Day 2 Routes */}
				<Route path="/day2/array" element={<Array />} />
				<Route path="/day2/calculator" element={<Calculator />} />
		<Route path="/day2/condition" element={<Condition />} />
				<Route path="/day2/multiplication" element={<Multiplication/>} />
				<Route path="/day2/variable" element={<Variable />} />

				{/* Day 3 Routes */}
		<Route path="/day3/gradeevaluator" element={<GradeEvaluator />} />
		<Route path="/day3/merge" element={<Merge />} />
		<Route path="/day3/object" element={<ShowObject />} />
		<Route path="/day3/userlist" element={<UserList />} />

				{/* Day 4 Routes */}
				<Route path="/day4/emoji-picker" element={<EmojiPicker />} />
				<Route path="/day4/users" element={<Users />} />

				{/* Day 5 Routes */}
		<Route path="/day5/focusinput" element={<FocusInput />} />
		  <Route path="/day5/lifting-state" element={<Parent />} />
		<Route path="/day5/loginform" element={<LoginForm />} />

        {/* Day 6 Routes */}
				<Route path="/day6/home" element={<Home />} />
		<Route path="/day6/view-user" element={<ViewUser />} />

				{/* Day 8 Routes */}
		<Route path="/day8/todo" element={<Todo />} />

    {/* Day 9 Routes */}
    <Route path="/day9/Complete-form" element={<CompleteForm />} />
			</Route>
		</Routes>
	);
}