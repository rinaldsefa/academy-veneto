import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Province } from "@/types/course";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/solid";

type MapModalProps = {
  isOpen: boolean;
  onClose: () => void;
  province?: Province;
};

const MapModal = ({ isOpen, onClose, province }: MapModalProps) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div className="absolute right-0 top-0  pr-2 pt-2 block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div>
                  <div className="mt-3 text-center sm:mt-5 max-">
                    <Dialog.Title
                      as="h2"
                      className="text-base font-bold leading-6 text-gray-900"
                    >
                      Scopri i corsi nella provincia di {province?.label}
                    </Dialog.Title>
                    <div className="mt-2">
                      {province?.courses.map((course, index) => (
                        <section
                          key={`${course.label}${index}`}
                          className="my-4"
                        >
                          <h4 className="text-sm font-bold text-gray-700">
                            {course.label}
                          </h4>

                          <ul>
                            {course.list.map((item, id) => (
                              <li
                                key={`${item}${id}`}
                                className="underline text-itspurple hover:text-indigo-800"
                              >
                                <Link href={course.href}> {item}</Link>
                              </li>
                            ))}
                          </ul>
                        </section>
                      ))}
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MapModal;
