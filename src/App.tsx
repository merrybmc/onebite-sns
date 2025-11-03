import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import { cn } from "./lib/utils";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { toast, Toaster } from "sonner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./components/ui/alert-dialog";
import { AlertDialogAction } from "@radix-ui/react-alert-dialog";
import { ChefHat } from "lucide-react";

function App() {
  const isActive = true;
  // const isActive = false;

  return (
    <div className="p-20">
      {/* lucide Icon */}
      <ChefHat className="h-20 w-20 fill-red-400" />

      {/* 경고 모달 */}
      <AlertDialog>
        <AlertDialogTrigger>경고 모달</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle>경고 모달 타이틀</AlertDialogTitle>
          <AlertDialogDescription>경고 모달 내용</AlertDialogDescription>
          <AlertDialogAction>확인</AlertDialogAction>
          <AlertDialogCancel>취소</AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>

      {/* 모달 */}
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogTitle>모달 타이틀</DialogTitle>
          <DialogDescription>모달 내용</DialogDescription>
        </DialogContent>
      </Dialog>

      {/* 토스트 */}
      <Toaster />

      {/* 팝오버 */}
      <Popover>
        <PopoverTrigger asChild>
          <Button>Open</Button>
        </PopoverTrigger>
        <PopoverContent>팝오버 컨텐츠</PopoverContent>
      </Popover>

      {/* 토스트 버튼 */}
      <Button
        onClick={() => {
          toast("토스트 메시지");
        }}
      >
        토스트 버튼
      </Button>

      {/* 캐로셀 */}
      <Carousel className="mx-10">
        <CarouselContent>
          <CarouselItem className="basis-1/3">1</CarouselItem>
          <CarouselItem className="basis-1/3">2</CarouselItem>
          <CarouselItem className="basis-1/3">3</CarouselItem>
          <CarouselItem>4</CarouselItem>
          <CarouselItem>5</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Textarea */}
      <Textarea />

      {/* Input */}
      <Input value={"기본값"} onChange={() => {}} placeholder="입력... " />

      {/* 버튼 */}
      <Button>버튼!</Button>
      <Button variant={"destructive"}>버튼!</Button>
      <Button variant={"ghost"}>버튼!</Button>
      <Button variant={"link"}>버튼!</Button>
      <Button variant={"outline"}>버튼!</Button>
      <Button variant={"secondary"}>버튼!</Button>

      {/* cn */}
      <div className={cn(isActive ? "text-blue-500" : "text-red-500")}>
        isActive
      </div>

      {/* tailwind */}
      {/* <div className="text-primary">Primary</div>
      <div className="text-muted">Muted</div>
      <div className="text-destructive">Destructive</div> */}
      {/* <div className="bg-black text-2xl font-bold underline">Hello World</div>
      <div className="text-xs text-red-500">text-xs</div>
      <div className="text-sm text-[rgb(100,30,200)]">text-xs</div>
      <div className="text-lg text-[#55bbff]">text-xs</div>
      <div className="text-xl font-bold">text-xs</div>
      <div className="h-20 w-20 bg-amber-500 text-2xl">text-xs</div>
      <div className="w-full bg-blue-500 text-[30px]">text-30px</div>

      <div className="h-50 w-50 bg-red-400 pt-5 pr-5 pb-10 pl-10">
        <div className="mt-8 h-full w-full bg-blue-400"></div>
      </div>

      <div className="m-5 border-x-5 border-y-2 bg-yellow-100">border</div>

      <div className="flex items-center justify-between">
        <div className="h-10 w-10 border">1</div>
        <div className="h-20 w-10 border">2</div>
        <div className="h-30 w-10 border">3</div>
        <div className="h-40 w-10 border">4</div>
      </div> */}
    </div>
  );
}

export default App;
